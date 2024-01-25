import React from "react"
import ReactDOM from "react-dom/client"
import store from "./features/store.js"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.jsx"

import "./assets/scss/main.scss"

// for gh pages. otherwise app not work at the github page preview
// could be use .env file
const BASE_URL = "simple-e-commerce-site/"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router basename={BASE_URL}>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
)
