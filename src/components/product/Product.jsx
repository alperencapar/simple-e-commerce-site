import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"
import { Link } from "react-router-dom"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

const Product = ({ product }) => {
	const [loadingEffect, setLoadingEffect] = useState()

	const dispatch = useDispatch()

	const handleLoadingEffect = () => {
		setLoadingEffect(() => true)

		setTimeout(() => {
			setLoadingEffect(() => false)
		}, 900)
	}

	const handleAddToCartClick = () => {
		handleLoadingEffect()
		dispatch(
			addToCart({
				id: product.id,
				title: product.title,
				price: product.price,
				description: product.description,
				image: product.image,
				quantity: 1,
			})
		)
	}

	const truncateSentence = (sentence, maxWordCountLimit = 4) => {
		const splitedSentence = sentence.split(" ")
		const wordCount = Number(splitedSentence.length)
		if (wordCount > maxWordCountLimit) {
			const truncatedArrSentence = splitedSentence.map((word, index) => {
				if (maxWordCountLimit >= index) {
					return word
				}
			})

			let truncatedStr = truncatedArrSentence.join(" ")
			truncatedStr = truncatedStr.trimEnd()
			// truncatedStr = truncatedStr.slice(0, -1) + "..."
			truncatedStr = truncatedStr + "..."

			return truncatedStr
		} else {
			return sentence
		}
	}

	return (
		<>
			<Card className="p-3" data-bs-theme="light">
				<Link to={"/products/" + product.id}>
					<Card.Img variant="top" src={product.image} />
				</Link>
				<Card.Body className="d-grid p-2">
					<Row>
						<Col>
							<Card.Title as="h6">
								<Link to={"/products/" + product.id}>
									{product.title}
								</Link>
							</Card.Title>
						</Col>
					</Row>

					<Row>
						<Col>
							<span className="fw-bold text-end">
								${product.price}
							</span>
						</Col>
					</Row>

					<Card.Text>
						{truncateSentence(product?.description)}
					</Card.Text>
					<Button
						className="align-self-end"
						onClick={() => handleAddToCartClick()}
					>
						{loadingEffect && (
							<>
								<Spinner
									as="span"
									animation="border"
									size="sm"
									role="status"
									aria-hidden="true"
									className="me-1"
								/>
								<span>Adding To Cart</span>
							</>
						)}
						{!loadingEffect && <span>Add To Cart</span>}
					</Button>
				</Card.Body>
			</Card>
		</>
	)
}

export default Product
