import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	show: false,
}

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		showAlert: (state) => {
			state.show = true
		},
		closeAlert: (state) => {
			state.show = false
		},
	},
})

export const { showAlert, closeAlert } = alertSlice.actions

export default alertSlice.reducer
