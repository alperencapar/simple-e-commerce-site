import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import Category from "./pages/Category"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"
import Header from "./components/header/Header"

// for gh pages. otherwise app not work at the github page preview
// could be use .env file
const BASE_URL = "simple-e-commerce-site/"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={BASE_URL}>
					<Route index element={<Home />} />

					<Route path="products">
						<Route index element={<Products />} />
						<Route path=":productId" element={<ProductDetail />} />
					</Route>

					<Route path="categories">
						<Route index element={<Categories />} />
						<Route path=":categoryName" element={<Category />} />
					</Route>

					<Route path="cart" element={<Cart />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
