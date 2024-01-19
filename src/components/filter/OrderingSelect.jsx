import { useDispatch, useSelector } from "react-redux"
import { SORT } from "../../utils/ordering"
import { changePricingOrder } from "../../features/filter/filterSlice"
import { useEffect } from "react"
import { sortProductOrder } from "../../features/product/productSlice"

import Select from "../form/Select"

const OrderingSelect = () => {
	const { sorting } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		const val = e.target.value
		dispatch(changePricingOrder(val))
	}

	const handleSorting = () => {
		dispatch(sortProductOrder(sorting))
	}

	useEffect(() => {
		if (sorting) {
			handleSorting()
		}
	}, [sorting])

	return (
		<>
			<Select
				aria-label="Sort product by price order"
				name="sorting"
				size="sm"
				onChange={(e) => handleChange(e)}
				className="w-auto"
				defaultValue={sorting && sorting}
				data={SORT}
			/>
			{/* <Form.Select
				aria-label="Sort product by price order"
				name="sorting"
				size="sm"
				onChange={(e) => handleChange(e)}
				className="w-auto"
				defaultValue={sorting && sorting}
			>
				<option value="" defaultValue>
					Select ordering
				</option>
				{orderKeys &&
					orderKeys.map((obj, i) => (
						<option key={obj[0]} value={obj[0]}>
							{obj[1]}
						</option>
					))}
			</Form.Select> */}
		</>
	)
}

export default OrderingSelect
