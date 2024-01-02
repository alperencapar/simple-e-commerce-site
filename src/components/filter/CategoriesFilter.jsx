import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"
import { getAllCategories } from "../../features/category/categorySlice"
import { useEffect } from "react"

const CategoriesFilter = () => {
	const dispatch = useDispatch()
	const { categories } = useSelector((state) => state.categories)

	useEffect(() => {
		dispatch(getAllCategories())
	}, [dispatch])

	return (
		<>
			<aside>
				<ul className="category-list">
					{categories?.map((category, i) => (
						<Category key={i} category={category} />
					))}
				</ul>
			</aside>
		</>
	)
}

export default CategoriesFilter
