import Form from "react-bootstrap/Form"
import OrderingSelect from "./OrderingSelect"
import Input from "./Input"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TopFilters = () => {
	const handleReload = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Container>
				<Row>
					<Form
						className="d-flex align-items-center justify-content-end flex-wrap p-0"
						onSubmit={handleReload}
					>
						<div className="form-filter-container d-flex gap-3">
							<OrderingSelect />
							<Input />
						</div>
						{/* <Col sm={3}></Col>
					<Col></Col> */}
					</Form>
				</Row>
			</Container>
		</>
	)
}

export default TopFilters
