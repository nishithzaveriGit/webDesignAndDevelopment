import React from "react";
import styled from "styled-components";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner1 from "./assets/banner-1.png";
import Banner2 from "./assets/banner-2.png";

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
				className="container-fluid pb-3"
				style={{ borderBottom: "1px solid #000" }}
			>
				<div className="container-sm">
					<Navbar />
				</div>
			</div>
			<div className="container-fluid pt-5 pb-3">
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
				className="container-fluid pt-5 pb-5"
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
		</StyledButton>
	);
}

export default App;
