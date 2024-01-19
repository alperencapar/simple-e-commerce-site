const paginateItems = (items, itemOffset, perPage) => {
	if (!Object.keys(items).length > 0)
		return { paginatedData: [], pageCount: 0 }

	const endOffset = itemOffset + perPage
	const pageCount = Math.ceil(items?.length / perPage)

	const paginatedData = items?.slice(itemOffset, endOffset)
	return { paginatedData: paginatedData, pageCount: pageCount }
}

export default paginateItems
