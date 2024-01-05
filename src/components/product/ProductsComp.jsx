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
		const triggerQueryAction = setTimeout(() => {
			if (category && !q) productViaCat()
			// no need to dispatch sortProductsByTitle action.
			// beacause its dispatched from the input component.
			// just need to dispatch getProductsViaCategory action if there is a category and isn't q
		}, 850)

		return () => clearTimeout(triggerQueryAction)
	}, [q])

	useEffect(() => {
		if (category) productViaCat()
		// if (category && !q) productViaCat()
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
