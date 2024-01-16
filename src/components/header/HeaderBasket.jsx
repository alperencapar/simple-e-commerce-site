import React, { useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Badge from "react-bootstrap/Badge"
import { useAnimate } from "framer-motion"

const HeaderBasket = () => {
	const { cartItems } = useSelector((state) => state.carts)
	let [ref, animate] = useAnimate()

	useEffect(() => {
		if (cartItems?.length > 0) {
			animate(
				ref.current,
				{
					x: [0, 4, -4, 0, 4, 0, -4, 0],
					scale: [1, 1.01, 1, 1.01],
					y: [0, 1, -1, 0],
				},
				{ duration: 0.35 }
			)
		}
	}, [cartItems])

	return (
		<>
			<Link
				to={"/cart"}
				className="basket-container position-relative"
				ref={ref}
			>
				<FaShoppingCart />
				<Badge
					className="position-absolute top-0 start-100 translate-middle"
					bg="light"
					text="dark"
					pill
				>
					{cartItems.length}
				</Badge>
			</Link>
		</>
	)
}

export default HeaderBasket
