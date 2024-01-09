import { useDispatch } from "react-redux"
import { SORT } from "../../utils/ordering"
import { changePricingOrder } from "../../features/filter/filterSlice"
import Form from "react-bootstrap/Form"

const OrderingSelect = () => {
	const dispatch = useDispatch()
	const orderKeys = Object.keys(SORT)

	const handleChange = (e) => {
		const val = e.target.value

		dispatch(changePricingOrder(val))
	}

	return (
		<>
			<Form.Select
				aria-label="Sort product by price order"
				name="sorting"
				size="sm"
				onChange={(e) => handleChange(e)}
				className="w-auto"
			>
				<option value="" defaultValue>
					Select ordering
				</option>
				<option value={SORT.ASC}>{orderKeys[0]}</option>
				<option value={SORT.DESC}>{orderKeys[1]}</option>
			</Form.Select>
		</>
	)
}

export default OrderingSelect
