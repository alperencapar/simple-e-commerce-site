import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../features/product/productSlice"
import ProductsPaginate from "./ProductsPaginate"
import { STATUS } from "../../utils/status"
import Loading from "../loading/Loading"

const Products = () => {
	const dispatch = useDispatch()

	let { products, productsStatus } = useSelector((state) => state.products)
	const { perPage } = useSelector((state) => state.filters)

	useEffect(() => {
		if (productsStatus !== STATUS.LOADING) dispatch(getProducts())
	}, [])

	const handleProductsRender = () => {
		// fetched:
		if (productsStatus === STATUS.SUCCESS) {
			// and there is a product or more:
			if (Object.keys(products).length > 0) {
				return <ProductsPaginate products={products} />
			} else {
				// if fetched and there's no data:
				return (
					<Empty variant={"warning"}>
						<p>Ups! We don't have any product to show</p>
					</Empty>
				)
			}
		} else if (productsStatus === STATUS.LOADING) {
			//loading:
			return (
				<Loading
					count={perPage}
					className="p-3 mb-4 mb-lg-0 card"
					containerClassName="products d-lg-grid d-block"
				/>
			)
		} else if (productsStatus === STATUS.ERROR) {
			return (
				<Empty variant={"danger"}>
					<p>Ups! There's an error. Please refresh your page</p>
				</Empty>
			)
		}
	}

	return <>{handleProductsRender()}</>
}

export default Products
