import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	getProducts,
	getProductsViaCategory,
} from "../../features/product/productSlice"
import { useParams } from "react-router-dom"
import ProductsPaginate from "./ProductsPaginate"
import { STATUS } from "../../utils/status"

const Products = () => {
	const dispatch = useDispatch()
	// const productsContainerRef = useRef()
	const { categoryName } = useParams()

	let { products } = useSelector((state) => state.products)
	const { q, category, sorting, priceRange } = useSelector(
		(state) => state.filters
	)

	const productViaCat = () => {
		dispatch(getProductsViaCategory())
	}

	const getAllProducts = () => {
		dispatch(getProducts())
	}

	useEffect(() => {
		if (category) {
			productViaCat()
		}

		// if (!category && !q) {
		// 	if (!categoryName) {
		// 		getAllProducts()
		// 	}
		// }
		if (!category) {
			getAllProducts()
		}
	}, [category])

	return (
		<>
			{products && Object.keys(products).length > 0 && (
				<ProductsPaginate products={products} />
			)}
		</>
	)
}

export default Products
