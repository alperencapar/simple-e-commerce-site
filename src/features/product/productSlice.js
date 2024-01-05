import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../../utils/status"
import { getRequest } from "../../utils/storeApi"
import { SORT } from "../../utils/ordering"
import { setStorage } from "../../utils/localStorageHandler"

const initialState = {
	products: [],
	productsStatus: STATUS.IDLE,
	product: [],
	productStatus: STATUS.IDLE,
}

export const getProducts = createAsyncThunk(
	"getProducts",
	async (state, thunkAPI) => {
		const response = await getRequest({ url: "/products" })
		const { sorting } = thunkAPI.getState().filters
		let tempResp
		if (sorting === SORT.ASC) {
			tempResp = response.sort((a, b) => a.price - b.price)
			return tempResp
		} else if (sorting === SORT.DESC) {
			tempResp = response.sort.sort((a, b) => b.price - a.price)
			return tempResp
		}
		return response
	}
)

export const getProductsViaCategory = createAsyncThunk(
	"getProductsViaCategory",
	async (state, thunkAPI) => {
		const { category } = thunkAPI.getState().filters
		const { sorting } = thunkAPI.getState().filters
		let tempResp
		if (category !== "") {
			let response = await getRequest({
				url: `/products/category/${category}`,
			})

			if (sorting === SORT.ASC) {
				tempResp = response.sort((a, b) => a.price - b.price)
				response = tempResp
			} else if (sorting === SORT.DESC) {
				tempResp = response.sort.sort((a, b) => b.price - a.price)
				response = tempResp
			}

			return response
		}
		// else {
		// 	thunkAPI.dispatch(getProducts())
		// }
	}
)

export const getProduct = createAsyncThunk("getProduct", async (id) => {
	return await getRequest({ url: `/products/${id}` })
})

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		sortProductsByTitle: (state, { payload }) => {
			if (payload !== "") {
				const tempProducts = state.products.filter((product) =>
					product.title.toLowerCase().includes(payload)
				)
				state.products = tempProducts
			}
		},

		sortProductOrder: (state, { payload }) => {
			let tempProducts
			if (payload === SORT.DESC) {
				tempProducts = state.products.sort((a, b) => b.price - a.price)
			} else if (payload === SORT.ASC) {
				tempProducts = state.products.sort((a, b) => a.price - b.price)
			} else {
				tempProducts = state.products
			}

			state.products = tempProducts
		},

		sortProductByPriceRange: (state, { payload }) => {
			//
			let { min = 0 } = payload
			let { max = 10000000 } = payload
			let tempProducts = state.products.filter(
				(product) => product.price >= min && product.price <= max
			)
			state.products = tempProducts
		},
	},
	extraReducers: (builder) => {
		//getProducts - ALL PRODUCTS
		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.productsStatus = STATUS.SUCCESS
			state.products = payload
			setStorage("products", state.products)
		})
		builder.addCase(getProducts.pending, (state) => {
			state.productsStatus = STATUS.LOADING
		})
		builder.addCase(getProducts.rejected, (state) => {
			state.productsStatus = STATUS.ERROR
		})

		//getProductsViaCategory - ALL CATEGORY PRODUCTS
		builder.addCase(
			getProductsViaCategory.fulfilled,
			(state, { payload }) => {
				state.productsStatus = STATUS.SUCCESS
				state.products = payload
			}
		)
		builder.addCase(getProductsViaCategory.pending, (state) => {
			state.productsStatus = STATUS.LOADING
		})
		builder.addCase(getProductsViaCategory.rejected, (state, err) => {
			state.productsStatus = STATUS.ERROR
			console.log(err)
		})

		//getProduct - SINGLE PRODUCT
		builder.addCase(getProduct.fulfilled, (state, { payload }) => {
			state.productStatus = STATUS.SUCCESS
			state.product = payload
		})
		builder.addCase(getProduct.pending, (state) => {
			state.productStatus = STATUS.LOADING
		})
		builder.addCase(getProduct.rejected, (state) => {
			state.productStatus = STATUS.ERROR
		})
	},
})

export const {
	sortProductsByTitle,
	sortProductOrder,
	sortProductByPriceRange,
} = productSlice.actions

export default productSlice.reducer
