import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTotalPrice } from "../../features/cart/cartSlice"
import { IconBase } from "react-icons"

const CartSummary = () => {
	const dispatch = useDispatch()
	const { total } = useSelector((state) => state.carts)

	const refreshTotal = () => {
		dispatch(getTotalPrice())
	}

	return (
		<>
			<aside className="cart-aside">
				<div className="card cart-summary">
					<h3>Cart Total: ${total && total}</h3>
				</div>
				<div>
					<button onClick={() => refreshTotal()} className="btn">
						Refresh Total
					</button>
				</div>
			</aside>
		</>
	)
}

export default CartSummary
