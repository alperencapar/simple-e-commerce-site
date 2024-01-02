import React from "react"
import BreadcrumbItem from "./BreadcrumbItem"

const Breadcrumbs = ({ breadcrumbs }) => {
	return (
		<>
			{breadcrumbs && (
				<div className="breadcrumb-container">
					<ul className="breadcrumbs" aria-label="breadcrumb">
						{breadcrumbs.map((item, i) => (
							<BreadcrumbItem key={i} item={item} />
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default Breadcrumbs
