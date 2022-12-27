import React from "react";
import "./SectionTestimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client1 from "../assets/img/client-test1.png";
import Client2 from "../assets/img/client-test2.png";
import RatingStar from "../assets/img/Rate.png";

const screenWidth = window.innerWidth;

const SectionTestimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode: false,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div className="navArrowContainerRight" onClick={() => onClick()}>
        <span className="fa-stack fa-custom-testimonial rightArrow">
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="fa-solid fa-chevron-right fa-stack-1x"></i>
        </span>
      </div>
    );
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div className="navArrowContainerLeft" onClick={() => onClick()}>
        <span className="fa-stack fa-custom-testimonial leftArrow">
          <i className="fa-solid fa-circle fa-stack-2x"></i>
          <i className="fa-solid fa-chevron-left fa-stack-1x"></i>
        </span>
      </div>
    );
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <CustomLeftArrow onClick={() => previous()} />
        <CustomRightArrow onClick={() => next()} />
      </div>
    );
  };

  return (
    <section id="testimonial" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="fs-1 fw-bold mb-4 text-center sectionTitle">Testimonial</h2>
            <p className="fs-5 fw-bold mb-5 text-center sectionSubtitle">Berbagai review positif dari para pelanggan kami</p>
            <div className="myCarousel">
              <Carousel
                centerMode={screenWidth > 464 ? true : false}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                keyBoardControl={false}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
              >
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client1} alt="testi-1" className="img-fluid clientImage" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3 testimonialDesc">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="testimonialClient">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client2} alt="testi-1" className="img-fluid clientImage" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3 testimonialDesc">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="testimonialClient">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card testi-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img src={Client1} alt="testi-1" className="img-fluid clientImage" />
                      </div>
                      <div className="col-lg-10">
                        <img src={RatingStar} alt="rating" className="img-fluid mb-2" />
                        <p className="fs-5 fw-bold mb-3 testimonialDesc">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="testimonialClient">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
