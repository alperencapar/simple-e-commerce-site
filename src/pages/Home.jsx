import ProductsComp from "../components/product/ProductsComp"
import CategoriesFilter from "../components/filter/CategoriesFilter"
import Filters from "../components/filter/Filters"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Home = () => {
	return (
		<>
			<Container>
				<Row className="mt-4">
					<Filters />
				</Row>

				<Row className="mt-3">
					<Col sm={3}>
						<CategoriesFilter />
					</Col>
					<Col sm={9}>
						<ProductsComp />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Home
