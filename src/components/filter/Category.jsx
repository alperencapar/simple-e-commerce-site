import { useDispatch, useSelector } from "react-redux"
import { changeCategory } from "../../features/filter/filterSlice"
import { getProductsViaCategory } from "../../features/product/productSlice"

const Category = ({ category }) => {
	const dispatch = useDispatch()
	const { category: filterCategory } = useSelector((state) => state.filters)

	const handleClick = (categoryName) => {
		if (categoryName === filterCategory) {
			dispatch(changeCategory(""))
			return
		} else {
			dispatch(changeCategory(categoryName))
			dispatch(getProductsViaCategory())
		}
	}
	return (
		<>
			<li onClick={() => handleClick(category)}>{category}</li>
		</>
	)
}

export default Category
