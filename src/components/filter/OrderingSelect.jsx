import { useDispatch, useSelector } from "react-redux"
import { SORT } from "../../utils/ordering"
import { changePricingOrder } from "../../features/filter/filterSlice"
import { sortProductOrder } from "../../features/product/productSlice"

import Select from "../form/Select"

const OrderingSelect = () => {
	const { sorting } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		const val = e.target.value
		dispatch(changePricingOrder(val))
		dispatch(sortProductOrder(sorting))
	}

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
		</>
	)
}

export default OrderingSelect
