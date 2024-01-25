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
	const [isActive, setIsActive] = useState(false)
	const { category } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeQuery(queryVal))

		const triggerAction = setTimeout(() => {
			if (isActive) {
				if (queryVal) dispatch(sortProductsByTitle(queryVal))

				if (!queryVal) {
					if (!category) {
						dispatch(getProducts())
					} else if (category) {
						dispatch(getProductsViaCategory())
					}
				}
			}
		}, 1000)

		return () => clearTimeout(triggerAction)
	}, [queryVal])

	return (
		<>
			<Input
				type="search"
				name="q"
				placeholder="Search product title"
				onChange={(e) => {
					setQueryVal(() => e.target.value)
				}}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
				className="w-auto"
			/>
		</>
	)
}

export default SearchInput
