import { useDispatch, useSelector } from "react-redux"
import Category from "./Category"

import Container from "react-bootstrap/Container"
import Loading from "../loading/Loading"
import { STATUS } from "../../utils/status"
import { useEffect } from "react"
import { getAllCategories } from "../../features/category/categorySlice"

const CategoriesComp = () => {
	const { categories, status } = useSelector((state) => state.categories)
	const dispatch = useDispatch()

	useEffect(() => {
		if (status !== STATUS.LOADING) dispatch(getAllCategories())
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

			{status === STATUS.LOADING && (
				<Loading
					count={4}
					className="card"
					containerClassName="categories-container"
				/>
			)}
		</Container>
	)
}

export default CategoriesComp
