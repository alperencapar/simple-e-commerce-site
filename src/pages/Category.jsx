import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ProductsComp from "../components/product/ProductsComp"
import { changeCategory } from "../features/filter/filterSlice"
import Filters from "../components/filter/Filters"

const Category = () => {
	const dispatch = useDispatch()
	const { categoryName } = useParams()

	useEffect(() => {
		dispatch(changeCategory(categoryName))
	}, [])

	return (
		<>
			<h2>{categoryName} Products</h2>
			<Filters />
			<ProductsComp />
		</>
	)
}

export default Category
