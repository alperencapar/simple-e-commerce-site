import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import { clearCart, getTotalPrice } from "../../features/cart/cartSlice"

const CartComp = () => {
	const dispatch = useDispatch()
	const { cartItems } = useSelector((state) => state.carts)

	useEffect(() => {
		dispatch(getTotalPrice())
	}, [cartItems])

	const handleClearCart = () => dispatch(clearCart())
	return (
		<>
			{cartItems?.length > 0 && (
				<>
					<CartSummary />
					<div className="card-items-container">
						<ul className="cart-items">
							{cartItems?.map((item, i) => (
								<CartItem key={i} item={item} />
							))}
						</ul>
					</div>
					<div className="cart-action">
						<button
							onClick={handleClearCart}
							className="btn btn-delete"
						>
							Clear The Cart
						</button>
					</div>
				</>
			)}
		</>
	)
}

export default CartComp
