import { forwardRef, useEffect } from "react"
import { useSelector } from "react-redux"

import ReactPaginate from "react-paginate"

import Nav from "react-bootstrap/Nav"

const ProductNavigation = forwardRef((props, ref) => {
	const { pageCount, setItemOffset, items } = props
	const { category, perPage } = useSelector((state) => state.filters)

	const handlePageClick = (event) => {
		const selectedPage = event?.selected || 0

		const newOffset = (selectedPage * perPage) % items?.length
		setItemOffset(() => newOffset)
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}

	useEffect(() => {
		// handlePageClick({ selected: 0 })
		if (category) handlePageClick()
	}, [category])

	return (
		<>
			<Nav
				className="justify-content-center mt-4"
				aria-label="Page navigation"
			>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next &raquo;"
					previousLabel="&laquo; previous"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					renderOnZeroPageCount={null}
					containerClassName="pagination justify-content-center"
					pageClassName="page-item"
					previousClassName="page-item"
					nextClassName="page-item"
					breakClassName="page-item"
					pageLinkClassName="page-link px-4"
					previousLinkClassName="page-link"
					nextLinkClassName="page-link"
					breakLinkClassName="page-link"
					activeClassName="active"
					disabledClassName="disabled"
					key={pageCount} // or --> items?.length
				/>
			</Nav>
		</>
	)
})

export default ProductNavigation
