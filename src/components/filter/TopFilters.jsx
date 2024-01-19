import Form from "react-bootstrap/Form"
import OrderingSelect from "./OrderingSelect"
import SearchInput from "./SearchInput"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import PerPageSelect from "./perPageSelect"

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
							<PerPageSelect />
							<SearchInput />
						</div>
					</Form>
				</Row>
			</Container>
		</>
	)
}

export default TopFilters
