import ProductsComp from "../components/product/ProductsComp"
import CategoriesFilter from "../components/filter/CategoriesFilter"
import Filter from "../components/filter/Filters"
import Header from "../components/header/Header"

const Products = () => {
	return (
		<>
			<Header />
			<Filter />
			<CategoriesFilter />
			<ProductsComp />
		</>
	)
}

export default Products
