import { useEffect, useState } from "react"
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
import ReactPaginate from "react-paginate"

import Nav from "react-bootstrap/Nav"
import { useRef } from "react"

const Products = () => {
	const dispatch = useDispatch()
	const productsContainerRef = useRef()

	let { products } = useSelector((state) => state.products)
	const { q, category, sorting, perPage, priceRange } = useSelector(
		(state) => state.filters
	)

	const { categoryName } = useParams()

	const [itemOffset, setItemOffset] = useState(0)
	const endOffset = itemOffset + perPage
	const paginatedProducts = products.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(products.length / perPage)

	const handlePageClick = (event) => {
		const newOffset = (event.selected * perPage) % products.length
		setItemOffset(newOffset)
		productsContainerRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
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

		if (!category && !q) {
			if (!categoryName) {
				getAllProducts()
			}
		}
	}, [category])

	return (
		<>
			{/* <div className="products d-md-grid d-block">
				{products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div> */}

			<div
				className="products d-md-grid d-block"
				ref={productsContainerRef}
			>
				{paginatedProducts?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>

			<Nav
				className="justify-content-center mt-4"
				aria-label="Page navigation"
			>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					containerClassName="pagination justify-content-center"
					pageClassName="page-item"
					previousClassName="page-item"
					nextClassName="page-item"
					pageLinkClassName="page-link px-4"
					previousLinkClassName="page-link"
					nextLinkClassName="page-link"
					activeClassName="active"
					disabledClassName="disabled"
				/>
			</Nav>
		</>
	)
}

export default Products
