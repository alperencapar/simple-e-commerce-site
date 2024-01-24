import { memo, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"
import Product from "./Product"
import ProductNavigation from "./ProductNavigation"
import paginateItems from "../../utils/paginateItems"

const ProductsPaginate = ({ products }) => {
	const productsContainerRef = useRef()
	const { perPage } = useSelector((state) => state.filters)

	// every time state is updated, component will re-render.
	const [itemOffset, setItemOffset] = useState(0)

	const { paginatedData: paginatedProducts, pageCount } = useMemo(
		() => paginateItems(products, itemOffset, perPage),
		[itemOffset, products, perPage]
	)

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

export default memo(ProductsPaginate)
