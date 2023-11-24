import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Industry1 from "../assets/industry1.png";
import Industry2 from "../assets/industry2.png";
import Industry3 from "../assets/industry3.png";
import Industry4 from "../assets/industry4.png";
import Industry5 from "../assets/industry5.png";
import Industry6 from "../assets/industry6.png";

// const images = [
// 	"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// 	"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// ];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselSlider = ({ item, isTestimonials }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: item && item === "multiple" ? 5 : 1,
			paritialVisibilityGutter: 70,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: item && item === "multiple" ? 3 : 1,
			paritialVisibilityGutter: item && item === "multiple" ? 60 : 60,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: item && item === "multiple" ? 2 : 1,
			paritialVisibilityGutter: 50,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			paritialVisibilityGutter: 30,
		},
	};

	const images = [
		Industry1,
		Industry2,
		Industry3,
		Industry4,
		Industry5,
		Industry6,
	];

	const testimonials = [
		"Excelent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away.",
		"Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away.Excelent App! ",
		" They provide 24/7 support, call them and get your labour right away. Best in Langley for temp labour! Excelent App!",
	];
	return (
		<>
			{isTestimonials && (
				<Carousel
					responsive={responsive}
					partialVisbile
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={1000}
					itemClass="list-group-item border-0"
				>
					{testimonials.slice(0, 1).map((ts) => {
						return <span>{ts}</span>;
					})}
				</Carousel>
			)}

			{!isTestimonials && (
				<Carousel
					responsive={responsive}
					partialVisbile
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={1000}
				>
					{images.slice(0, 5).map((image) => {
						return (
							<Image
								draggable={false}
								style={{ width: "100%", height: "100%" }}
								src={image}
							/>
						);
					})}
				</Carousel>
			)}
		</>
	);
};

export default CarouselSlider;
