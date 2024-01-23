import { FaChevronRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import Button from "react-bootstrap/Button"

const BreadcrumbItem = ({ item }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (item?.url !== "") navigate(item.url)
	}

	return (
		<>
			<li>
				<Button onClick={() => handleClick()} variant="link">
					<FaChevronRight />
					<span>{item.name}</span>
				</Button>
			</li>
		</>
	)
}

export default BreadcrumbItem
