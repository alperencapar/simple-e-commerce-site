import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeQuery } from "../../features/filter/filterSlice"
import {
	getProducts,
	getProductsViaCategory,
	sortProductsByTitle,
} from "../../features/product/productSlice"
import Input from "../form/Input"

const SearchInput = () => {
	const [queryVal, setQueryVal] = useState("")
	const [onQuery, setonQuery] = useState(false)
	const { q, category } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	useEffect(() => {
		const triggerAction = setTimeout(() => {
			if (q) dispatch(sortProductsByTitle(q))

			//to reset products
			if (!q && category) {
				dispatch(getProductsViaCategory())
			} else if (!q && !category && onQuery) {
				dispatch(getProducts())
			}
		}, 1000)

		return () => clearTimeout(triggerAction)
	}, [q])

	const handleInputChange = (e) => {
		const val = e.target.value
		setQueryVal(() => val)
	}

	useEffect(() => {
		const triggerQueryAction = setTimeout(() => {
			if (onQuery) {
				dispatch(changeQuery(queryVal))
			}
		}, 850)

		return () => clearTimeout(triggerQueryAction)
	}, [queryVal])

	return (
		<>
			<Input
				type="search"
				name="q"
				id=""
				placeholder="Search product title"
				onChange={(e) => handleInputChange(e)}
				onFocus={() => setonQuery(true)}
				onBlur={() =>
					setTimeout(() => {
						setonQuery(false)
					}, 2000)
				}
				className="w-auto"
			/>
		</>
	)
}

export default SearchInput
