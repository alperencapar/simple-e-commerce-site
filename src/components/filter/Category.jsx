import { useDispatch, useSelector } from "react-redux"
import { changeCategory } from "../../features/filter/filterSlice"
import {
	getProducts,
	getProductsViaCategory,
} from "../../features/product/productSlice"
import NavItem from "react-bootstrap/NavItem"
import Button from "react-bootstrap/Button"
import { useCallback } from "react"

const Category = ({ category }) => {
	const dispatch = useDispatch()
	const { category: filterCategory } = useSelector((state) => state.filters)

	const handleClick = useCallback(
		(categoryName) => {
			if (categoryName === filterCategory) {
				dispatch(changeCategory(""))
				dispatch(getProducts())
				return
			} else {
				dispatch(changeCategory(categoryName))
				dispatch(getProductsViaCategory())
			}
		},
		[filterCategory]
	)

	return (
		<>
			<NavItem as="li" onClick={() => handleClick(category)}>
				<Button
					variant="secondary"
					className="w-100"
					active={category === filterCategory}
				>
					{category}
				</Button>
			</NavItem>
		</>
	)
}

export default Category
