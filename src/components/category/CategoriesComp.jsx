import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"
import { getAllCategories } from "../../features/category/categorySlice"

const CategoriesComp = () => {
	const { categories } = useSelector((state) => state.categories)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllCategories())
	}, [])

	return (
		<ul aria-label="Product categories">
			{categories?.map((cat, i) => (
				<Category key={i} category={cat} />
			))}
		</ul>
	)
}

export default CategoriesComp
