const setStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data))
}

const getStorage = (key) => {
	const data = JSON.parse(localStorage.getItem(key))
	return data || []
}

export { setStorage, getStorage }
