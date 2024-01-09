import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	getProducts,
	getProductsViaCategory,
	sortProductByPriceRange,
	sortProductOrder,
	sortProductsByTitle,
} from "../../features/product/productSlice"
import Product from "./Product"
import { useParams } from "react-router-dom"

const Products = () => {
	const dispatch = useDispatch()
	let { products } = useSelector((state) => state.products)
	const { q, category, sorting, priceRange } = useSelector(
		(state) => state.filters
	)
	const { categoryName } = useParams()
	// const { pathname } = useLocation()

	const sortOrdering = () => {
		dispatch(sortProductOrder(sorting))
	}

	const sortPriceRange = () => {
		dispatch(sortProductByPriceRange(priceRange))
	}

	const productViaCat = () => {
		dispatch(getProductsViaCategory())
	}

	const getAllProducts = () => {
		dispatch(getProducts())
	}

	// no need to dispatch sortProductsByTitle action.
	// beacause its dispatched from the input component.
	// just need to dispatch getProductsViaCategory action when category is changed
	/*
		useEffect(() => {
			const triggerQueryAction = setTimeout(() => {
				if (category && !q) productViaCat()
			}, 850)

			return () => clearTimeout(triggerQueryAction)
		}, [q])
	*/

	useEffect(() => {
		if (category) productViaCat()

		// if (category) productViaCat()
		if (!category && !q) {
			if (!categoryName) {
				getAllProducts()
			}
			// if (!pathname.includes("categories/")) {
			// 	getAllProducts()
			// }
		}
	}, [category])

	// ? can be moved to OrderingSelect component
	useEffect(() => {
		sortPriceRange()
		sortOrdering()
	}, [sorting, priceRange])

	return (
		<>
			<div className="products d-md-grid d-block">
				{products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</>
	)
}

export default Products
