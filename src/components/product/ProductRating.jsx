import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const ProductRating = ({ rating }) => {
	const fullStarCount = parseInt(rating)
	const isFloated = Boolean(rating % fullStarCount)
	const remainingStarCount = Math.floor(5 - parseFloat(rating))

	const handleStars = () => {
		let starElements = [...Array(fullStarCount)].map((key, i) => {
			if (fullStarCount >= i + 1) {
				return <FaStar color="gold" key={i} />
			}
		})

		if (isFloated) {
			starElements.push(<FaStarHalfAlt color="gold" key="half-star" />)
		}

		if (remainingStarCount) {
			let restEmptyStars = [...Array(remainingStarCount)].map(
				(key, i) => {
					return <FaRegStar color="gold" key={`empty-${i}`} />
				}
			)

			starElements.push(restEmptyStars)
		}

		return starElements
	}

	return (
		<>
			<div className="d-flex align-items-center gap-1">
				{handleStars()}
			</div>
		</>
	)
}

export default ProductRating
