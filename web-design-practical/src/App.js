import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner1 from "./assets/banner-1.png";
import Banner2 from "./assets/banner-2.png";
import Workforce from "./assets/workforce.png";
import CustomerIcon from "./assets/cutomer-icon1.png";
import FeatureCustomer from "./assets/customer-featured-customer.png";

import CarouselSlider from "./components/Carousel";

const StyledButton = styled.div`
	min-width: 200px;
	border: none;
	font-size: 18px;
	/* padding: 7px 10px;
	The resulting background color will be based on the bg props. 
	background-color: ${(props) =>
		props.bg === "black" ? "black" : "transparent"};*/
`;

function App() {
	return (
		<StyledButton bg="">
			<div
				className="navbar-container container-fluid pb-3"
				style={{ borderBottom: "1px solid #000" }}
			>
				<div className="container-sm">
					<Navbar />
				</div>
			</div>
			<div className="banner-container container-fluid pt-5 pb-3">
				<div className="container-sm clearfix">
					<img
						src={Banner1}
						className="float-start float-sm-start mt-5 pt-5 img-fluid"
						alt="banner1"
					/>
					<img
						src={Banner2}
						className="float-end float-sm-end img-fluid"
						alt="banner2"
					/>
				</div>
			</div>
			<div
				className="staffing-container container-fluid pt-5 pb-5"
				style={{ backgroundColor: "#f0ffff" }}
			>
				<div className="container-sm pt-5 pb-5">
					<div className="container text-center">
						<h1>How On-Demand Staffing Works</h1>
						<br />
						<div className="row justify-content-center">
							<div className="col-6 col-sm-3 text-start pe-0">
								{/* <img
									src="https://placehold.it/150x80?text=IMAGE"
									className="img-responsive"
									alt="pic1"
								/> */}
								<div class="background-step-1"></div>
								<h3>Quick Signup</h3>
								<p className="pe-2">t</p>
							</div>
							<div className="col-6 col-sm-3 text-start ps-0 pe-0">
								<div class="background-step-2"></div>

								<h3>Post Jobs 24/7</h3>
								<p className="pe-2">
									Use our mobile appor web platform from the office or on the
									go, any time of day
								</p>
							</div>
							<div className="col-6 col-sm-3 text-start ps-0 pe-0">
								<div class="background-step-3"></div>
								<h3>View Matches</h3>
								<p className="pe-2">
									With thousands of ewady-to-go workers you can watch your jobs
									beng filled in real time
								</p>
							</div>
							<div className="col-6 col-sm-3 text-start ps-0">
								<div class="background-step-4"></div>
								<h3>We Do The Rest!</h3>
								<p className="pe-2">
									We take care of payroll, deductions and insurance
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="industry-container container-fluid pt-5 pb-5"
				style={{
					borderBottom: "12px solid #f5f8ff",
					backgroundColor: "#fff",
				}}
			>
				<div className="container-sm pt-5 pb-5">
					<div className="container text-center">
						<h6>WE ARE SERVING IN</h6>
						<h1>Industries We Are Working With</h1>
						<br />
						<div className="row justify-content-center">
							<CarouselSlider item="multiple" />
						</div>
					</div>
				</div>
			</div>
			<div
				className="workforce-container  container-fluid pt-5 pb-5"
				style={{
					backgroundColor: "#fff",
				}}
			>
				<div className="container-sm pt-5 pb-5 ">
					<div className="container">
						<div className="row justify-content-center clearfix">
							<div className="float-start float-sm-start w-auto me-5 pe-5">
								<img src={Workforce} className="img-fluid" alt="Workforce" />
							</div>
							<div className="float-end float-sm-end w-auto ms-5 ps-5">
								<h6>FOR EMPLOYERS</h6>
								<h1 className="workforce-bg">
									<span className="d-flex">Workforce</span>
									<span className="d-flex"> At Your Fingertips</span>
								</h1>
								<br />
								<ul class="list-group">
									<li class="list-group-item border-0">
										Easy to use mobile and web platform
									</li>
									<li class="list-group-item border-0">
										<strong>45,000+</strong> workers
									</li>
									<li class="list-group-item border-0">
										Realtime <strong>tracking</strong>
									</li>
									<li class="list-group-item border-0">
										<strong>95%</strong> fullfillment rate
									</li>
									<li class="list-group-item border-0">
										Preferred worker list
									</li>
								</ul>
								<br />
								<button className="btn btn-info">Learn more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="customers-container container-fluid pt-5 pb-5"
				style={{
					backgroundColor: "#f5f8ff",
				}}
			>
				<div className="left-bg"></div>
				<div className="right-bg"></div>
				<div className="container-sm pt-5 pb-5 ">
					<div className="container">
						<div className="row justify-content-center bg-transparent clearfix">
							<div className="col-8 text-center">
								<img
									src={CustomerIcon}
									className="img-fluid mb-5"
									alt="customer-feedback"
								/>
								<h6>TESTIMONIALS</h6>
								<h1 className="workforce-bg">
									<span className="d-inline-flex">See What Our&nbsp;</span>
									<span className="d-inline-flex">Customers&nbsp;</span>
									<span className="d-inline-flex">Are Saying</span>
								</h1>
								<br />
							</div>
							<div className="col-10 p-5" style={{ background: "#fff" }}>
								<CarouselSlider item="" isTestimonials={true} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{ position: "relative" }}>
					<hr />
					<small class="feedback text-muted">FEATURED CUSTOMERS</small>
				</div>
				<div className="container">
					<div className="row justify-content-center bg-transparent clearfix">
						<div className="col-12 p-5">
							<img
								src={FeatureCustomer}
								className="float-end float-sm-end img-fluid"
								alt="Feature Customer"
							/>
						</div>
					</div>
				</div>
			</div>
		</StyledButton>
	);
}

export default App;
