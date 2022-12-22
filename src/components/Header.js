import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import burgerMenu from "../assets/img/fi_menu.png";

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="offcanvas-button" data-bs-toggle="offcanvas" role="button">
        <img src={burgerMenu} alt="menu-mobile" onClick={handleShow} />
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75 customOffCanvas">
        <Offcanvas.Header closeButton>
          <h5 className="fw-5">BCR</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ms-auto fs-5 fw-normal">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                FAQ
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const DefaultHeader = () => {
  return (
    <nav id="headerNavbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand bg-primary text-light p-2" href="/">
          Car Rental
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 fw-normal">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <OffCanvasExample placement="end" />
      </div>
    </nav>
  );
};

function NormalHeader() {
  return <DefaultHeader></DefaultHeader>;
}

export default NormalHeader;
