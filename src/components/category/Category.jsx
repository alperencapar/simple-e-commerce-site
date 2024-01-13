import React from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

const Category = ({ category }) => {
	return (
		<>
			<Link to={category}>
				<Card aria-label="Category">
					<Row>
						<Card.Body className="d-grid justify-content-center align-items-center">
							<Card.Title>{category}</Card.Title>
						</Card.Body>
					</Row>
				</Card>
			</Link>
		</>
	)
}

export default Category
