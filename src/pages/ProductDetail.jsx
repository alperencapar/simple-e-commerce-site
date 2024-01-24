import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../features/product/productSlice"
import { addToCart } from "../features/cart/cartSlice"
import Breadcrumbs from "../components/breadcrumb/Breadcrumbs"
import { FaMinus, FaPlus } from "react-icons/fa"
import Alert from "../components/alert/Alert"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import ProductRating from "../components/product/ProductRating"

const ProductDetail = () => {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(1)

	const { product } = useSelector((state) => state.products)
	const { cartItems } = useSelector((state) => state.carts)
	const { productId } = useParams()

	const breadcrumbData = [
		{
			name: "products",
			url: "/products",
		},
		{
			name: "category",
			url: `/categories/${product?.category}`,
		},
	]

	const checkIsPositiveVal = (val) => {
		if (val > 0) return true
		return false
	}

	const handleQuantityChange = () => {
		dispatch(
			addToCart({
				id: product.id,
				title: product.title,
				price: product.price,
				description: product.description,
				image: product.image,
				quantity: quantity,
			})
		)
	}

	const handleInputChange = (e) => {
		const newVal = parseInt(e.target.value)
		const isNumberBiggerThanZero = checkIsPositiveVal(newVal)
		if (isNumberBiggerThanZero) {
			setQuantity(() => newVal)
		} else {
			setQuantity(() => 1)
		}
	}

	const quantityIncrement = () => {
		setQuantity((oldQuantity) => oldQuantity + 1)
	}

	const quantityDecrement = () => {
		const isNumberBiggerThanZero = checkIsPositiveVal(quantity)
		if (isNumberBiggerThanZero && quantity !== 1) {
			setQuantity((oldQuantity) => oldQuantity - 1)
		}
	}

	useEffect(() => {
		dispatch(getProduct(productId))
	}, [productId])

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbData} />
				{Object.keys(product).length > 0 && (
					<div className="product-detail-page">
						<Row>
							<Col sm={8}>
								<div className="product-container d-flex">
									<Card>
										<div className="img-container">
											<Card.Img
												className="img-fluid"
												src={product?.image}
												alt={product?.title}
											/>
										</div>
										<Card.Body>
											<div className="right">
												<div className="product-info">
													<h1>{product?.title}</h1>

													<p aria-label="Product Info Description">
														{product?.description}
													</p>
													<div>
														<Row>
															<Col className="d-flex gap-1">
																<span>
																	Product
																	Price:{" "}
																</span>
																<p aria-label="price">
																	$
																	{
																		product?.price
																	}
																</p>
															</Col>
															<Col>
																<span>
																	<ProductRating
																		rating={
																			product
																				?.rating
																				?.rate
																		}
																	/>
																</span>
																<span>
																	Reviewed{" "}
																	{
																		product
																			?.rating
																			?.count
																	}{" "}
																	times
																</span>
															</Col>
														</Row>
													</div>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
							</Col>

							<Col sm={4}>
								<aside>
									<Row>
										<div className="product-price">
											${product?.price}
										</div>

										<InputGroup>
											<Button
												variant="light"
												className="minus"
												onClick={quantityDecrement}
											>
												<FaMinus />
											</Button>

											<Form.Control
												type="number"
												name="product-quantity"
												id=""
												value={quantity}
												onChange={(e) =>
													handleInputChange(e)
												}
											/>

											<Button
												variant="light"
												className="plus"
												onClick={quantityIncrement}
											>
												<FaPlus />
											</Button>
										</InputGroup>

										<div className="button-container">
											<Button
												onClick={() =>
													handleQuantityChange()
												}
											>
												Add To Cart
											</Button>
										</div>
									</Row>
								</aside>
							</Col>
						</Row>
					</div>
				)}
			</Container>
		</>
	)
}

export default ProductDetail
