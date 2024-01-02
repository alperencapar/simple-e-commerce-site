import { useRef } from "react"
import { useDispatch } from "react-redux"
import { changeQuantity, removeFromCart } from "../../features/cart/cartSlice"
import { FaMinus, FaPlus } from "react-icons/fa"
const CartItem = ({ item }) => {
	const dispatch = useDispatch()
	const quantityRef = useRef()

	const handleQuantityChange = (quantity) => {
		dispatch(
			changeQuantity({
				...item,
				quantity: Number(quantity),
			})
		)
	}

	const handleDeleteItem = (id) => {
		dispatch(removeFromCart({ id }))
	}

	const handleInputChange = () => {
		const inputVal = Number(quantityRef.current.value)
		handleQuantityChange(inputVal)
	}

	const quantityIncrement = () => {
		const newVal = Number(quantityRef.current.value) + 1
		quantityRef.current.value = newVal
		handleQuantityChange(quantityRef.current.value)
	}

	const quantityDecrement = () => {
		const newVal = Number(quantityRef.current.value) - 1
		quantityRef.current.value = newVal
		handleQuantityChange(quantityRef.current.value)
	}

	return (
		<>
			<li className="cart-item">
				<div className="item-img">
					<img src={item.image} alt="" />
				</div>

				<div className="item-info">
					<h2>{item.title}</h2>
					<div>
						<span>Product Price:</span>
						<span>${item.price}</span>
						<span>x {item.quantity}</span>
					</div>
					<div>
						<span>Total price: ${item.price * item.quantity}</span>
					</div>
				</div>

				<div className="cart-item-action-btn">
					<div className="quantity-container">
						<button
							className="minus"
							onClick={() => quantityDecrement()}
						>
							<FaMinus />
						</button>
						<input
							ref={quantityRef}
							type="number"
							name={`quantity-${item.id}`}
							onChange={() => handleInputChange()}
							// onChange={() => handleQuantityChange()}
							// value={item.quantity}
							defaultValue={item.quantity}
						/>
						<button
							className="plus"
							onClick={() => quantityIncrement()}
						>
							<FaPlus />
						</button>
					</div>

					<button
						className="btn-delete"
						onClick={() => handleDeleteItem(item.id)}
					>
						Delete From Cart
					</button>
				</div>
			</li>
		</>
	)
}

export default CartItem
