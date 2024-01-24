import BreadcrumbItem from "./BreadcrumbItem"

const Breadcrumbs = ({ breadcrumbs }) => {
	return (
		<>
			{breadcrumbs && (
				<ul className="breadcrumbs mt-4" aria-label="breadcrumb">
					{breadcrumbs.map((item, i) => (
						<BreadcrumbItem key={i} item={item} />
					))}
				</ul>
			)}
		</>
	)
}

export default Breadcrumbs
