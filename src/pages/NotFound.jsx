import Empty from "../components/empty/Empty"

const NotFound = () => {
	return (
		<div>
			<Empty variant={"danger"}>
				<p>Not found! This Url doesn't exist!</p>
			</Empty>
		</div>
	)
}

export default NotFound
