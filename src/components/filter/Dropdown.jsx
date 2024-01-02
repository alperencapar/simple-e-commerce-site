import { useDispatch } from "react-redux"
import { SORT } from "../../utils/ordering"
import { changePricingOrder } from "../../features/filter/filterSlice"

const Dropdown = () => {
	const dispatch = useDispatch()
	const orderKeys = Object.keys(SORT)

	const handleChange = (e) => {
		const val = e.target.value

		dispatch(changePricingOrder(val))
	}

	return (
		<>
			<select name="sorting" id="" onChange={(e) => handleChange(e)}>
				<option value="" defaultValue>
					Select ordering
				</option>
				<option value={SORT.ASC}>{orderKeys[0]}</option>
				<option value={SORT.DESC}>{orderKeys[1]}</option>
			</select>
		</>
	)
}

export default Dropdown
