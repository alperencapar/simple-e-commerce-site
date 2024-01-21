import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Loading = (props) => {
	return (
		<>
			<Skeleton inline={true} baseColor="#7f7f7f" {...props} />
		</>
	)
}

export default Loading
