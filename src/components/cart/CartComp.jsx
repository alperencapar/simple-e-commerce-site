import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import { getTotalPrice } from "../../features/cart/cartSlice"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Empty from "../empty/Empty"

const CartComp = () => {
	const dispatch = useDispatch()
	const { cartItems } = useSelector((state) => state.carts)

	useEffect(() => {
		dispatch(getTotalPrice())
	}, [cartItems])

	const handleCartItemRender = () => {
		if (cartItems?.length > 0) {
			return (
				<>
					<Container className="mt-4">
						<Row>
							<Col lg={8}>
								<ul className="cart-items d-grid gap-3">
									{cartItems.map((item) => (
										<CartItem key={item.id} item={item} />
									))}
								</ul>
							</Col>
							<Col lg={4}>
								<CartSummary />
							</Col>
						</Row>
					</Container>
				</>
			)
		} else {
			return (
				<Empty variant={"warning"}>
					<p>
						You don't have any product in your cart. You should add
						product your cart(optional)
					</p>
				</Empty>
			)
		}
	}

	return (
		<>
			<>{handleCartItemRender()}</>
		</>
	)
}

export default CartComp
