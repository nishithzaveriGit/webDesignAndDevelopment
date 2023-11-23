import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<Link
					className="navbar-brand pe-4 me-4"
					to="/"
					style={{ borderRight: "1px solid #000" }}
				>
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link me-4" aria-current="page" to="/">
								Find Workers
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link me-4" to="/">
								Find Jobs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link me-4" to="/">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link me-4" to="/">
								Resources
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Contact
							</Link>
						</li>
					</ul>
					<div className="d-flex">
						<Link className="nav-link me-4 mt-3" to="/">
							Login
						</Link>
						<button className="btn btn-outline-dark p-3" type="button">
							Open an account
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

// const CustomLink = ({ to, children, ...props }) => {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//     return (
//       <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}>
//           {children}
//         </Link>
//       </li>
//     )
//   }

export default Navbar;
