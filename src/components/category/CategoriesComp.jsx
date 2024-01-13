import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"
import { getAllCategories } from "../../features/category/categorySlice"

import Container from "react-bootstrap/Container"

const CategoriesComp = () => {
	const { categories } = useSelector((state) => state.categories)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllCategories())
	}, [])

	return (
		<Container className="mt-4">
			<div
				className="categories-container"
				aria-label="Product categories"
			>
				{categories?.map((cat, i) => (
					<Category key={i} category={cat} />
				))}
			</div>
		</Container>
	)
}

export default CategoriesComp
