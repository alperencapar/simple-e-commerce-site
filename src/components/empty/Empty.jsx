import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

const Empty = ({ variant, children }) => {
	return (
		<>
			<Container>
				<Alert className="mt-4 mx-5" variant={variant || "warning"}>
					{children}
				</Alert>
			</Container>
		</>
	)
}

export default Empty
