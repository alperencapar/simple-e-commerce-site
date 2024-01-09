import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, getTotalPrice } from "../../features/cart/cartSlice"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { FaTrash } from "react-icons/fa"

const CartSummary = () => {
	const dispatch = useDispatch()
	const { total } = useSelector((state) => state.carts)

	const refreshTotal = () => {
		dispatch(getTotalPrice())
	}

	const clearTheCartItems = () => {
		dispatch(clearCart())
	}

	return (
		<>
			<aside className="cart-aside">
				<Card border="primary" className="cart-summary">
					<Card.Header>Summary</Card.Header>
					<Card.Body>
						<div className="summary-actions">
							<Row>
								<Col>
									<Button
										className="w-100"
										onClick={() => refreshTotal()}
									>
										Calculate Total
									</Button>
								</Col>

								<Col>
									<Button
										className="w-100"
										variant="danger"
										onClick={clearTheCartItems}
									>
										<FaTrash /> <span>Clear The Cart</span>
									</Button>
								</Col>
							</Row>
						</div>

						<Row>
							<Col>Total Pricing:</Col>
							<Col>${total && total}</Col>
						</Row>
					</Card.Body>
				</Card>
			</aside>
		</>
	)
}

export default CartSummary
