import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"
import { Link } from "react-router-dom"

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Product = ({ product }) => {
	const dispatch = useDispatch()

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
			<Card className="p-3">
				<Link to={"/products/" + product.id}>
					<Card.Img variant="top" src={product.image} />
				</Link>
				<Card.Body className="d-grid p-2">
					<Row>
						<Col sm="auto">
							<Card.Title as="h6">
								<Link to={"/products/" + product.id}>
									{product.title}
								</Link>
							</Card.Title>
						</Col>
						<Col sm="auto">
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
						onClick={() =>
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
					>
						Add To Cart
					</Button>
				</Card.Body>
			</Card>
			{/* <div className="product-container">
				<div>
					<Link to={"/products/" + product.id}>
						<img src={product.image} alt="" />
					</Link>
				</div>

				<div>
					<Link to={"/products/" + product.id}>
						<h4>{product.title}</h4>
					</Link>

					<span>{product.price}</span>

					<p>{product.description}</p>

					<span>
						<Link to={"/categories/" + product.category}>
							{product.category}
						</Link>
					</span>
				</div>

				<div>
					<button
						className="btn btn-add-cart"
						onClick={() =>
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
					>
						Add To Cart
					</button>
				</div>
			</div> */}
		</>
	)
}

export default Product
