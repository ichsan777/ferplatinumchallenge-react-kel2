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
      <a class="offcanvas-button" data-bs-toggle="offcanvas" role="button">
        <img src={burgerMenu} alt="menu-mobile" onClick={handleShow} />
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75 customOffCanvas">
        <Offcanvas.Header closeButton>
          <h5 class="fw-5">BCR</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="navbar-nav ms-auto fs-5 fw-normal">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Why Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
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
    <nav id="headerNavbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand bg-primary text-light p-2" href="#">
          Car Rental
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto fs-5 fw-normal">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Why Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
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
