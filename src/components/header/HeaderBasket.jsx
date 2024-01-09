import React, { useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Badge from "react-bootstrap/Badge"

const HeaderBasket = () => {
	const { cartItems } = useSelector((state) => state.carts)

	useEffect(() => {}, [])

	return (
		<>
			<Link to={"/cart"} className="basket-container position-relative">
				<FaShoppingCart />
				<Badge
					pill
					className="position-absolute top-0 start-100 translate-middle"
				>
					{cartItems.length}
				</Badge>
			</Link>
		</>
	)
}

export default HeaderBasket
