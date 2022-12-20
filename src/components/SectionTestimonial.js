import React from "react";
import "./SectionTestimonial.css";
import Client1 from "../assets/img/client-test1.png";
import Client2 from "../assets/img/client-test2.png";
import RatingStar from "../assets/img/Rate.png";
import Carousel from "react-bootstrap/Carousel";

const SectionTestimonial = () => {
  return (
    <section id="testimonial" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="fs-1 fw-bold mb-4 text-center">Testimonial</h2>
            <p className="fs-5 fw-bold mb-5 text-center">Berbagai review positif dari para pelanggan kami</p>
            <Carousel id="myCarousel" indicators={false}>
              <Carousel.Item>
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client1} alt="testi-1" className="img-fluid client-img" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client2} alt="testi-1" className="img-fluid client-img" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client1} alt="testi-1" className="img-fluid client-img" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
