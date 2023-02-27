import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import burgerMenu from "../assets/img/fi_menu.png";

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleRegisterButton = () => {
    navigate("/signup");
  };

  //note : tidak pakai NavLink/Link karena tidak support scroll to section

  return (
    <>
      <div className="offcanvas-button" data-bs-toggle="offcanvas" role="button">
        <img src={burgerMenu} alt="menu-mobile" onClick={handleShow} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75 customOffCanvas" scroll={true}>
        <Offcanvas.Header closeButton>
          <h5 className="fw-5">BCR</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ms-auto fs-5 fw-normal">
            <li className="nav-item" key="offcanvas-1">
              <a className="nav-link active" aria-current="page" href="#about">
                Our Services
              </a>
            </li>
            <li className="nav-item" key="offcanvas-2">
              <a className="nav-link active" href="#whyus">
                Why Us
              </a>
            </li>
            <li className="nav-item" key="offcanvas-3">
              <a className="nav-link active" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item" key="offcanvas-4">
              <a className="nav-link active" href="#faq">
                FAQ
              </a>
            </li>
            <button className="registerButton" key="offcanvas-5" onClick={handleRegisterButton}>
              Register
            </button>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const DefaultHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleRegisterButton = () => {
    navigate("/signup");
  };

  return (
    <nav id="headerNavbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button className="navbar-brand bg-primary text-light p-2 border-0" onClick={handleLogoClick}>
          Car Rental
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 fw-normal">
            <li className="nav-item">
              <a className="nav-link active" href="#about" key="navbar-1">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#whyus" key="navbar-2">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#testimonial" key="navbar-3">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#faq" key="navbar-4">
                FAQ
              </a>
            </li>
            <button className="registerButton" key="navbar-4" onClick={handleRegisterButton}>
              Register
            </button>
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
