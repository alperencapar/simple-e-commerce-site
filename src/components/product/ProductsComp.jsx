import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	getProducts,
	getProductsViaCategory,
} from "../../features/product/productSlice"
import { useParams } from "react-router-dom"
import ProductsPaginate from "./ProductsPaginate"
import { STATUS } from "../../utils/status"
import Loading from "../loading/Loading"

const Products = () => {
	const dispatch = useDispatch()
	// const productsContainerRef = useRef()
	const { categoryName } = useParams()

	let { products, productsStatus } = useSelector((state) => state.products)
	const { q, category, perPage, priceRange } = useSelector(
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
			{productsStatus === STATUS.SUCCESS &&
				Object.keys(products).length > 0 && (
					<ProductsPaginate products={products} />
				)}

			{productsStatus === STATUS.LOADING && (
				<>
					<Loading
						count={perPage}
						className="p-3 mb-4 mb-lg-0 card"
						containerClassName="products d-lg-grid d-block"
					/>
				</>
			)}
		</>
	)
}

export default Products
