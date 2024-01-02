import axios from "axios"

const BASE_URL = "https://fakestoreapi.com"
const controller = new AbortController()

const api = axios.create({
	baseURL: BASE_URL,
})

const getRequest = async (config) => {
	const response = await api.request(config, {
		signal: controller.signal,
	})
	return response.data
}

const postRequest = async (config) => {
	config.signal = controller.signal
	const response = await api.request(config.url, config)
	return response.data
}

export { controller, getRequest, postRequest }
export default api
