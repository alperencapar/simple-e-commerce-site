import React from "react"

import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

import "../../assets/js/vendors/bootstrap.js"

const HeaderNav = () => {
	return (
		<>
			<Nav className="ms-auto">
				<Nav.Item>
					<LinkContainer to="/products">
						<Nav.Link>Products</Nav.Link>
					</LinkContainer>
				</Nav.Item>

				<Nav.Item>
					<LinkContainer to="/categories">
						<Nav.Link>Categories</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
		</>
	)
}

export default HeaderNav
