import { useRef } from "react"
import { useDispatch } from "react-redux"
import { changeQuantity, removeFromCart } from "../../features/cart/cartSlice"
import { FaMinus, FaPlus } from "react-icons/fa"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const CartItem = ({ item }) => {
	const dispatch = useDispatch()
	const quantityRef = useRef()

	const checkIsPositiveVal = (val) => {
		if (val > 0) return true
		return false
	}

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
		const isNumberBiggerThanZero = checkIsPositiveVal(inputVal)
		if (isNumberBiggerThanZero) {
			quantityRef.current.value = inputVal
			handleQuantityChange(quantityRef.current.value)
		} else {
			quantityRef.current.value = 1
			handleQuantityChange(quantityRef.current.value)
		}
	}

	const quantityIncrement = () => {
		const newVal = Number(quantityRef.current.value) + 1
		const isNumberBiggerThanZero = checkIsPositiveVal(newVal)
		if (isNumberBiggerThanZero) {
			quantityRef.current.value = newVal
			handleQuantityChange(quantityRef.current.value)
		}
		// else {
		// 	quantityRef.current.value = 1
		// 	handleQuantityChange(quantityRef.current.value)
		// }
	}

	const quantityDecrement = () => {
		const newVal = Number(quantityRef.current.value) - 1
		const isNumberBiggerThanZero = checkIsPositiveVal(newVal)
		if (isNumberBiggerThanZero) {
			quantityRef.current.value = newVal
			handleQuantityChange(quantityRef.current.value)
		}
	}

	return (
		<>
			<li className="cart-item">
				<Row>
					<Card>
						<Card.Body>
							<Row>
								<Col sm={3}>
									<Card.Img src={item.image} />
								</Col>

								<Col sm={9}>
									<Row>
										<Card.Title>{item.title}</Card.Title>
									</Row>

									<Row>
										<Table responsive>
											<thead>
												<tr>
													<th>Price</th>
													<th>Count</th>
													<th>Total</th>
												</tr>
											</thead>

											<tbody>
												<tr>
													<td>${item.price} </td>
													<td>x{item.quantity} </td>
													<td>
														$
														{item.quantity *
															item.price}{" "}
													</td>
												</tr>
											</tbody>
										</Table>

										<Row className="d-sm-flex d-grid">
											<Col
												sm={6}
												className="quantity-action-btns"
											>
												<InputGroup>
													<Button
														onClick={() =>
															quantityDecrement()
														}
													>
														<FaMinus />
													</Button>

													<Form.Control
														ref={quantityRef}
														type="number"
														name={`quantity-${item.id}`}
														onChange={() =>
															handleInputChange()
														}
														// value={item.quantity}
														defaultValue={
															item.quantity
														}
													/>

													<Button
														className="plus"
														onClick={() =>
															quantityIncrement()
														}
													>
														<FaPlus />
													</Button>
												</InputGroup>
											</Col>

											<Col sm={6}>
												<Button
													variant="danger"
													onClick={() =>
														handleDeleteItem(
															item.id
														)
													}
												>
													Delete From Cart
												</Button>
											</Col>
										</Row>
									</Row>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Row>
			</li>
		</>
	)
}

export default CartItem
