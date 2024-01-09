import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { STATUS } from "../../utils/status"
import { getStorage, setStorage } from "../../utils/localStorageHandler"
import { getRequest } from "../../utils/storeApi"

const initialState = {
	categories: [],
	status: STATUS.IDLE,
}

export const getAllCategories = createAsyncThunk(
	"categories/getAllCategories",
	async (state, thunkAPI) => {
		const categories = await getRequest("/products/categories")

		thunkAPI.dispatch(setCategoriesToStorage(categories))
		return categories
	}
	//thunkAPI.getState()
)

const categorySlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategoriesToStorage: (state, { payload }) => {
			setStorage("categories", payload || state.categories)
		},
		getCategoriesFromStorage: () => {
			return getStorage("categories")
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
			state.status = STATUS.SUCCESS
			state.categories = payload
		})
		builder.addCase(getAllCategories.pending, (state) => {
			state.status = STATUS.LOADING
		})
		builder.addCase(getAllCategories.rejected, (state) => {
			state.status = STATUS.ERROR
		})
	},
})

export const { setCategoriesToStorage, getCategoriesFromStorage } =
	categorySlice.actions

export default categorySlice.reducer
