import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../features/product/productSlice"
import { addToCart } from "../features/cart/cartSlice"
import Breadcrumbs from "../components/breadcrumb/Breadcrumbs"
import { FaMinus, FaPlus } from "react-icons/fa"
import Header from "../components/header/Header"
import Alert from "../components/alert/Alert"

const ProductDetail = () => {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(1)
	const { product } = useSelector((state) => state.products)
	const { cartItems } = useSelector((state) => state.carts)
	const { productId } = useParams()

	const breadcrumbData = [
		{
			name: "products",
			url: "/products",
		},
		{
			name: "category",
			url: `/category/${product?.category}`,
		},
	]

	const quantityDecrease = () => {
		setQuantity((oldQuantity) => oldQuantity - 1)
	}
	const quantityIncrease = () => {
		setQuantity((oldQuantity) => oldQuantity + 1)
	}

	useEffect(() => {
		dispatch(getProduct(productId))
	}, [productId])

	useEffect(() => {}, [cartItems])

	return (
		<>
			<Header />
			<Breadcrumbs breadcrumbs={breadcrumbData} />
			{Object.keys(product).length > 0 && (
				<>
					<div className="product-container">
						<div className="left">
							<div className="img-container">
								<img
									src={product?.image}
									alt={product?.title}
								/>
							</div>
						</div>
						<div className="right">
							<div className="product-info">
								<h1>{product?.title}</h1>

								<p aria-label="Product Info Description">
									{product?.description}
								</p>
								<p aria-label="price">${product?.price}</p>
								<div className="rating">
									<span>rating: {product?.rating?.rate}</span>
									<span>
										rate count: {product?.rating?.count}
									</span>
								</div>
							</div>
						</div>
					</div>

					<aside>
						<div className="product-price">${product?.price}</div>

						<div className="count-input-container">
							<button
								className="minus"
								onClick={() => quantityDecrease()}
							>
								<FaMinus />
							</button>
							<input
								type="number"
								name="product-quantity"
								id=""
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							/>
							<button
								className="plus"
								onClick={() => quantityIncrease()}
							>
								<FaPlus />
							</button>
						</div>

						<div className="button-container">
							<button
								onClick={() => {
									dispatch(
										addToCart({
											id: product.id,
											title: product.title,
											price: product.price,
											description: product.description,
											image: product.image,
											quantity: quantity,
										})
									)
								}}
							>
								Add To Cart
							</button>
						</div>
					</aside>
				</>
			)}
		</>
	)
}

export default ProductDetail
