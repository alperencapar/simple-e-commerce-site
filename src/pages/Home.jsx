import ProductsComp from "../components/product/ProductsComp"
import CategoriesFilter from "../components/filter/CategoriesFilter"
import Filters from "../components/filter/Filters"
import Header from "../components/header/Header"

const Home = () => {
	return (
		<>
			<Header />
			<div className="cont">
				<Filters />
				<CategoriesFilter />
				<ProductsComp />
			</div>
		</>
	)
}

export default Home
