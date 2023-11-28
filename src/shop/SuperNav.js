import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuperNav = () => {
  const notify = () => {
    toast.error("Not implemented yet !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  return (
    <>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'aqua', fontSize: '30px' }}>
            MosheShop
          </a>
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
                <a className="nav-link active" aria-current="page" onClick={notify}>
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={notify} id="yourCart">
                  Your Cart
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={notify} >
                  Orders History
                </button>
              </li>
              <li className="nav-item">
              <button className="nav-link" onClick={notify} >
                  Login
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <button className="nav-link" id="darkModeButton" style={{ color: 'aliceblue' }} onClick={notify}>
                Dark mode
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" id="dropdownoption">
                  <li>
                    <a className="dropdown-item" href="#">
                      All products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SuperNav;
