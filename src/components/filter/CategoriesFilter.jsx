import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"
import { getAllCategories } from "../../features/category/categorySlice"
import { useEffect } from "react"

import Nav from "react-bootstrap/Nav"

const CategoriesFilter = () => {
	const dispatch = useDispatch()
	const { categories } = useSelector((state) => state.categories)

	useEffect(() => {
		dispatch(getAllCategories())
	}, [])

	return (
		<>
			<aside>
				{categories && (
					<Nav className="category-list d-grid gap-2" as="ul">
						<h5 className="text-center mb-1">Categories</h5>
						{categories.map((category, i) => (
							<Category key={i} category={category} />
						))}
					</Nav>
				)}
			</aside>
		</>
	)
}

export default CategoriesFilter
