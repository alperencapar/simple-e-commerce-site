import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "./category/categorySlice"
import productSlice from "./product/productSlice"
import cartSlice from "./cart/cartSlice"
import filterSlice from "./filter/filterSlice"
import alertSlice from "./alert/alertSlice"

export default configureStore({
	reducer: {
		categories: categorySlice,
		products: productSlice,
		carts: cartSlice,
		filters: filterSlice,
		alert: alertSlice,
	},
})
