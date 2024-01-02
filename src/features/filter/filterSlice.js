import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	q: "",
	category: "",
	sorting: null,
	perPage: 5,
	priceRange: {
		min: 0,
		max: 1000,
	},
}

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeQuery: (state, { payload }) => {
			state.q = payload
		},
		changeCategory: (state, { payload }) => {
			state.category = payload
		},
		changePricingOrder: (state, { payload }) => {
			state.sorting = payload
		},
		changePerPage: (state, { payload }) => {
			state.perPage = payload
		},
		changePriceRange: (state, { payload }) => {
			state.perPage = payload
		},
	},
})

export const {
	changeQuery,
	changeCategory,
	changePricingOrder,
	changePerPage,
	changePriceRange,
	filterProducts,
} = filterSlice.actions

export default filterSlice.reducer
