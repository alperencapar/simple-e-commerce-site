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
// import { useLocation } from "react-router-dom"

const Products = () => {
	const dispatch = useDispatch()
	let { products } = useSelector((state) => state.products)
	const { q, category, sorting, priceRange } = useSelector(
		(state) => state.filters
	)

	const queryProducts = () => {
		dispatch(sortProductsByTitle(q))
	}

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

	useEffect(() => {
		// if (!q && !category) {
		// 	getAllProducts()
		// }

		const triggerQueryAction = setTimeout(() => {
			if (q) queryProducts()
			if (category && !q) productViaCat()
		}, 750)

		return () => clearTimeout(triggerQueryAction)
	}, [q])

	useEffect(() => {
		if (category) productViaCat()
		if (category && !q) productViaCat()
		if (!category && !q) getAllProducts()
	}, [category])

	useEffect(() => {
		sortPriceRange()
		sortOrdering()
	}, [sorting, priceRange])

	return (
		<>
			<div className="products">
				{products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</>
	)
}

export default Products
