import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link" to="/add-product">Add Product</Link>
        <Link className="nav-link" to="/list-product">List Product</Link>
      </div>
    </div>
  </div>
</nav>
        // <nav className="nav">
        //   <Link to="/" className="site-title">
        //     Site Name
        //   </Link>
        //   <ul>
        //     <CustomLink to="/add-product">Add Product</CustomLink>
        //     <CustomLink to="/list-product">List Product</CustomLink>
        //   </ul>
        // </nav>
      )
    }

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

export default Navbar