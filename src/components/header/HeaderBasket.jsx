import React, { useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HeaderBasket = () => {
	const { cartItems } = useSelector((state) => state.carts)

	useEffect(() => {}, [])

	return (
		<>
			<div className="cart-container">
				<Link to={"/cart"}>
					<FaShoppingCart />
					<span>{cartItems.length}</span>
				</Link>
			</div>
		</>
	)
}

export default HeaderBasket
