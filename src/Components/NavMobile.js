import React from "react";

const NavMobile = ({ handleCategoryFilter, searchMe, clickMe }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top ">
      <div className="container-fluid">
        <a className="navbar-brand fst-italic" href="#">
          <span className="text-primary fw-bold fs-4 ">flame</span>
          <span className="text-white">Tech</span>
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
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    smartphones
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    Laptops
                  </a>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    fragrances
                  </a>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    skincare
                  </a>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    groceries
                  </a>
                  <a
                    onClick={handleCategoryFilter}
                    className="dropdown-item"
                    href="#"
                  >
                    home-decoration
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchMe}
            />
            {/* <button onClick={clickMe} className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
