import React from 'react';
import { Link as MyLink } from "react-router-dom";


const NavBar = () => {

  return (
    <div>
      <div className="shape" />
      <div className="circle" />

      <div className="container mt-5">
        <nav className="navbar m-2 navbar-expand-lg shadow rounded navbar-light bg-white">
          <div className="container-fluid">
            <MyLink className="navbar-brand logo" to="/">MarketPlace</MyLink>
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
            <div
              className="collapse navbar-collapse text-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-center me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <MyLink className="nav-link" to="/About" >About Us</MyLink>
                </li>
                <li className="nav-item">
                  <MyLink
                    className="nav-link "
                    to="/Projects"
                  >Projects</MyLink>
                </li>
                <li className="nav-item ">
                  <MyLink
                    className="nav-link "
                    to="/auth/Register"
                    role="button"
                  >
                    Register
                  </MyLink>
                  <ul className="dropdown-menu" aria-labelledby="cartDropdown">
                    <li><MyLink className="dropdown-item" href="#">Action</MyLink></li>
                    <li>
                      <MyLink className="dropdown-item" href="#">Another action</MyLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <MyLink className="dropdown-item" href="#">Something else here</MyLink>
                    </li>
                  </ul>

                </li>
                <li className="nav-item">
                  <MyLink
                    className="nav-link "
                    to="/dashboard/Admin"
                  >Dashboard</MyLink>
                </li>
              </ul>
              <div className="d-flex">
                <div className="m-2 mx-5">
                  <a className="bi text-dark bi-search m-3"
                    href="#"
                    role="button"
                    data-bs-target="#searchBar"
                    data-bs-toggle="modal"
                  ></a>
                  <a className="bi text-dark bi-cart"
                    href="#"
                    id="cartDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  ></a>
                </div>

                <a className="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Click Me</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;

