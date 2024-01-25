import { useEffect, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"
import Product from "./Product"
import ProductNavigation from "./ProductNavigation"
import paginateItems from "../../utils/paginateItems"

const ProductsPaginate = ({ products }) => {
	const productsContainerRef = useRef()
	const { sorting, perPage } = useSelector((state) => state.filters)

	// every time state is updated, component will re-render.
	const [itemOffset, setItemOffset] = useState(0)

	const { paginatedData: paginatedProducts, pageCount } = useMemo(
		() => paginateItems(products, itemOffset, perPage),
		[itemOffset, products, perPage]
	)

	// reset page to 1 when products and select filters are changed
	// products'll change when query input has value
	useEffect(() => {
		setItemOffset(() => 0)
	}, [products, sorting])

	return (
		<>
			<div
				className="products d-lg-grid d-block"
				ref={productsContainerRef}
			>
				{paginatedProducts?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>

			<ProductNavigation
				// handlePageClick={handlePageClick}
				items={products}
				pageCount={pageCount}
				setItemOffset={setItemOffset}
				ref={productsContainerRef}
			/>
		</>
	)
}

export default ProductsPaginate
