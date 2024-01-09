import HeaderNav from "./HeaderNav"
import HeaderBasket from "./HeaderBasket"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
	return (
		<header>
			<Navbar expand="lg" fixed="top" className="bg-body-tertiary">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>RTK Simple Store</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="header-nav" />
					<Navbar.Collapse id="header-nav">
						<HeaderNav />
						<HeaderBasket />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
