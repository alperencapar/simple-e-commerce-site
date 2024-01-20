import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ProductsComp from "../components/product/ProductsComp"
import { changeCategory } from "../features/filter/filterSlice"
import Filters from "../components/filter/Filters"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const Category = () => {
	const dispatch = useDispatch()
	const { categoryName } = useParams()

	useEffect(() => {
		if (categoryName) {
			dispatch(changeCategory(categoryName))
		}

		return () => dispatch(changeCategory(""))
	}, [categoryName])

	return (
		<>
			<Container>
				<Row className="mt-4">
					<h2>{categoryName} Products</h2>
				</Row>
				<Row className="mt-4">
					<Filters />
				</Row>
				<Row className="mt-3">
					<ProductsComp />
				</Row>
			</Container>
		</>
	)
}

export default Category
