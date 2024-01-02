import { FaChevronRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const BreadcrumbItem = ({ item }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		if (item?.url !== "") navigate(item.url)
	}
	return (
		<>
			<li>
				<button onClick={() => handleClick()}>
					<FaChevronRight />
					<span>{item.name}</span>
				</button>
			</li>
		</>
	)
}

export default BreadcrumbItem
