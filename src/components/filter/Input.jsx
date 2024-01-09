import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeQuery } from "../../features/filter/filterSlice"
import {
	getProducts,
	getProductsViaCategory,
	sortProductsByTitle,
} from "../../features/product/productSlice"
import Form from "react-bootstrap/Form"

const Input = () => {
	const [queryVal, setQueryVal] = useState("")
	const [onQuery, setonQuery] = useState(false)
	const { q, category } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	useEffect(() => {
		const triggerAction = setTimeout(() => {
			dispatch(sortProductsByTitle(q))
		}, 750)

		return () => clearTimeout(triggerAction)
	}, [q])

	const handleInputChange = (e) => {
		const val = e.target.value
		// console.log(e.target)
		setQueryVal(() => val)
	}

	useEffect(() => {
		const triggerQueryAction = setTimeout(() => {
			if (onQuery) {
				if (queryVal) {
					dispatch(changeQuery(queryVal))
				}

				//to reset products
				if (!queryVal && category) {
					dispatch(getProductsViaCategory())
				} else if (!queryVal && !category) {
					dispatch(getProducts())
				}
			}
		}, 850)

		return () => clearTimeout(triggerQueryAction)
	}, [queryVal])

	return (
		<>
			<Form.Control
				type="search"
				name="q"
				id=""
				placeholder="Search product title"
				onChange={(e) => handleInputChange(e)}
				onFocus={() => setonQuery(true)}
				className="w-auto"
			/>
		</>
	)
}

export default Input
