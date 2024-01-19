import { useDispatch, useSelector } from "react-redux"
import Select from "../form/Select"
import { changePerPage } from "../../features/filter/filterSlice"

const PerPageSelect = () => {
	const dispatch = useDispatch()
	const { perPage } = useSelector((state) => state.filters)
	const data = {
		3: 3,
		6: 6,
		9: 9,
		12: 12,
	}

	const handleChange = (e) => {
		const val = parseInt(e.target.value) || 6
		dispatch(changePerPage(val))
	}

	return (
		<>
			<Select
				aria-label="Product per page filter"
				name="per-page"
				size="sm"
				onChange={(e) => handleChange(e)}
				className="w-auto"
				defaultValue={perPage && perPage}
				data={data}
			/>
		</>
	)
}

export default PerPageSelect
