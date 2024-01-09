import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { setStorage, getStorage } from "../../utils/localStorageHandler"

const initialState = {
	cartItems: getStorage("cart") || [],
	total: 0,
}

const setCartItemsToLocalStorage = (cartData) => {
	setStorage("cart", cartData)
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// add to cart with quantity
		addToCart: (state, { payload }) => {
			if (payload.quantity <= 0) return

			const isItemInCart = state.cartItems.find(
				(item) => item.id === payload.id
			)

			//if item in the cart already:
			if (isItemInCart) {
				const tempCartItems = state.cartItems.map((item) => {
					if (item.id === payload.id) {
						let tempQuantity = item.quantity + payload.quantity

						return {
							...item,
							quantity: tempQuantity,
						}
					} else {
						return item
					}
				})

				state.cartItems = tempCartItems
			}
			// if item not in the cart:
			else {
				//inside reducers don't need to mutate the data. Rtk and immutable.js handling it
				state.cartItems.push(payload)
				//quantity is coming from add to cart button
			}
			setCartItemsToLocalStorage(state.cartItems)
		},

		//change quantity of item
		changeQuantity: (state, { payload }) => {
			if (payload.quantity <= 0) return

			const isItemInCart = state.cartItems.find(
				(item) => item.id === payload.id
			)
			if (isItemInCart) {
				const tempItems = state.cartItems.map((item) => {
					if (item !== isItemInCart) {
						return {
							...item,
						}
					} else {
						return {
							...item,
							quantity: payload.quantity,
						}
					}
				})
				state.cartItems = tempItems
			} else {
				state.cartItems.push(payload)
			}
			setCartItemsToLocalStorage(state.cartItems)
		},

		//remove item from cart
		removeFromCart: (state, { payload }) => {
			const cartItems = state.cartItems.filter(
				(item) => item.id !== payload.id
			)
			state.cartItems = cartItems
			setCartItemsToLocalStorage(state.cartItems)
		},

		// clear cart items
		clearCart: (state) => {
			state.cartItems = []
			setCartItemsToLocalStorage(state.cartItems)
		},

		//
		getTotalPrice: (state) => {
			state.total = state?.cartItems?.reduce((total, cartItem) => {
				return (total += cartItem.price * cartItem.quantity)
			}, 0)
		},
	},
})

export const {
	addToCart,
	changeQuantity,
	removeFromCart,
	clearCart,
	getTotalPrice,
} = cartSlice.actions

export default cartSlice.reducer
