const truncateText = (sentence, maxWordCountLimit = 4) => {
	const splitedSentence = sentence.split(" ")
	const wordCount = Number(splitedSentence.length)
	if (wordCount > maxWordCountLimit) {
		const truncatedArrSentence = splitedSentence.map((word, index) => {
			if (maxWordCountLimit >= index) {
				return word
			}
		})

		let truncatedStr = truncatedArrSentence.join(" ")
		truncatedStr = truncatedStr.trimEnd()
		// truncatedStr = truncatedStr.slice(0, -1) + "..."
		truncatedStr = truncatedStr + "..."

		return truncatedStr
	} else {
		return sentence
	}
}

export default truncateText
