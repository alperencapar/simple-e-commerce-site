import Form from "react-bootstrap/Form"

const Select = ({ data, ...props }) => {
	return (
		<>
			<Form.Select {...props}>
				<option value="" defaultValue>
					Select
				</option>
				{data &&
					Object.entries(data).map((obj) => (
						<option key={obj[0]} value={obj[0]}>
							{obj[1]}
						</option>
					))}
			</Form.Select>
		</>
	)
}

export default Select
