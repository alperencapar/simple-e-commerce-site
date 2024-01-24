import { FaStar, FaStarHalfAlt } from "react-icons/fa"

const ProductRating = ({ rating }) => {
	const fullStars = parseInt(rating)
	// const floatStar = rating % fullStars
	const isHalfOrMore = rating % fullStars >= 0.5

	console.log("isHalfOrMore: ", isHalfOrMore)

	return (
		<>
			<div className="d-flex align-items-center gap-1">
				{[...Array(fullStars)].map((star, i) => (
					<FaStar color="gold" key={i} />
				))}
				{isHalfOrMore && <FaStarHalfAlt color="gold" />}
			</div>
		</>
	)
}

export default ProductRating
