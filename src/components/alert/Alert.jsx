import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeAlert } from "../../features/alert/alertSlice"

const Alert = ({ children }) => {
	const { show } = useSelector((state) => state.alert)
	const dispatch = useDispatch()

	useEffect(() => {
		return () => dispatch(closeAlert())
	}, [])

	const renderAlert = () => {
		if (show) {
			return (
				<>
					<div className="alert">{children}</div>
				</>
			)
		}
	}

	return <>{renderAlert()}</>
}

export default Alert
