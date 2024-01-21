import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"
import { getAllCategories } from "../../features/category/categorySlice"
import { useEffect } from "react"

import Nav from "react-bootstrap/Nav"
import { STATUS } from "../../utils/status"
import Loading from "../loading/Loading"

const CategoriesFilter = () => {
	const dispatch = useDispatch()
	const { categories, status } = useSelector((state) => state.categories)

	useEffect(() => {
		dispatch(getAllCategories())
	}, [])

	return (
		<>
			<aside>
				{categories && (
					<Nav
						className="category-list d-grid gap-2 pb-4 pb-sm-0"
						as="ul"
					>
						<h5 className="text-center mb-1">Categories</h5>
						{categories.map((category, i) => (
							<Category key={i} category={category} />
						))}
					</Nav>
				)}

				{status === STATUS.LOADING && (
					<>
						<Loading
							count={4}
							containerClassName="category-list d-grid gap-2 pb-4 pb-sm-0 category-list-loading"
							as="ul"
						/>
					</>
				)}
			</aside>
		</>
	)
}

export default CategoriesFilter
