import Slider from "react-slick"
import LinkContainer from "react-router-bootstrap/LinkContainer"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import monitor from "../../assets/img/monitor-uwd.png"
import jewelry from "../../assets/img/jewelry.png"
import womenDress from "../../assets/img/women-dress.png"
import menSuit from "../../assets/img/men-suit.png"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	const sliderData = [
		{
			text: "Checkout our electronic category. You can find 49 inch utra wide gamign and productivity monitor.",
			url: "categories/electronics",
			img: monitor,
		},
		{
			text: "Checkout elegant jewels",
			img: jewelry,
			url: "categories/jewelry",
		},
		{
			text: "Checkout man clothing products. You can find t-shirts, backpacks and jackets",
			img: menSuit,
			url: "categories/men's clothing",
		},
		{
			text: "Checkout women clothing products. You can find t-shirts, shorts, jackets, raincoats for yourself",
			img: womenDress,
			url: "categories/women's clothing",
		},
	]

	return (
		<Container>
			<Slider {...settings}>
				{sliderData &&
					sliderData.map((SliderItem, keyIndex) => (
						<div key={keyIndex}>
							<Row>
								<Col
									className="d-flex justify-content-center"
									sm={7}
								>
									<Image
										src={SliderItem.img}
										alt={SliderItem.text}
										thumbnail
									/>
								</Col>
								<Col
									className="d-flex flex-column justify-content-center mb-4"
									sm={5}
								>
									<h3 className="mx-2">{SliderItem.text}</h3>

									<div>
										<LinkContainer to={SliderItem.url}>
											<Button variant="secondary">
												See Category Products
											</Button>
										</LinkContainer>
									</div>
								</Col>
							</Row>
						</div>
					))}
			</Slider>
		</Container>
	)
}

export default SliderComp
