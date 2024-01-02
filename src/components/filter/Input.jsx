import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeQuery } from "../../features/filter/filterSlice"
import { sortProductsByTitle } from "../../features/product/productSlice"

const Input = () => {
	const { q } = useSelector((state) => state.filters)
	const dispatch = useDispatch()

	useEffect(() => {
		const triggerAction = setTimeout(() => {
			dispatch(sortProductsByTitle(q))
		}, 750)

		return () => clearTimeout(triggerAction)
	}, [q])

	const handleSearch = (e) => {
		const val = e.target.value
		dispatch(changeQuery(val))
	}
	return (
		<>
			<input
				type="search"
				name="q"
				id=""
				onChange={(e) => handleSearch(e)}
			/>
		</>
	)
}

export default Input
