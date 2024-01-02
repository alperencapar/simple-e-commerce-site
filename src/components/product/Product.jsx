import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../../features/cart/cartSlice"

const Product = ({ product }) => {
	const dispatch = useDispatch()

	return (
		<>
			<div className="product-container">
				<div>
					<Link to={"/products/" + product.id}>
						<img src={product.image} alt="" />
					</Link>
				</div>

				<div>
					<Link to={"/products/" + product.id}>
						<h4>{product.title}</h4>
					</Link>

					<span>{product.price}</span>

					<p>{product.description}</p>

					<span>
						<Link to={"/categories/" + product.category}>
							{product.category}
						</Link>
					</span>
				</div>

				<div>
					<button
						className="btn btn-add-cart"
						onClick={() =>
							dispatch(
								addToCart({
									id: product.id,
									title: product.title,
									price: product.price,
									description: product.description,
									image: product.image,
									quantity: 1,
								})
							)
						}
					>
						Add To Cart
					</button>
				</div>
			</div>
		</>
	)
}

export default Product
