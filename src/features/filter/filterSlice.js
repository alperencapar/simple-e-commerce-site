import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	q: "",
	category: "",
	sorting: "",
	perPage: 6,
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
			state.category = payload.toLowerCase()
		},
		changePricingOrder: (state, { payload }) => {
			state.sorting = payload.toLowerCase()
		},
		changePerPage: (state, { payload }) => {
			let newPayload
			if (payload) {
				newPayload = parseInt(payload)
				newPayload = payload >= 3 ? payload : 6
				state.perPage = newPayload
			} else {
				state.perPage = 6
			}
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
