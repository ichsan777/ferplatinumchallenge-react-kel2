import React from "react";
import "./Footer.css";
import iconFacebook from "../assets/img/icon_facebook.png";
import iconInstagram from "../assets/img/icon_instagram.png";
import iconTwitter from "../assets/img/icon_twitter.png";
import iconEmail from "../assets/img/icon_mail.png";
import iconTwitch from "../assets/img/icon_twitch.png";
import logoKotakBiru from "../assets/img/Rectangle 74.png";

const NormalFooter = () => {
  return (
    <footer>
      <section id="footer-car">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer-1 footer-col">
              <p className="fs-5 fw-bold mb-3 text-start address">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <a href="mailto:binarcarrental@gmail.com" target="_blank" rel="noopener noreferrer" className="linkEmail">
                binarcarrental@gmail.com
              </a>
              <p className="fs-5 fw-bold text-start telNumber">081-233-334-808</p>
            </div>
            <div className="col-lg-3 footer-2 footer-col">
              <ul className="footer-nav">
                <li className="footer-nav-item footerLinkNav">
                  <a href="/#about">Our Services</a>
                </li>
                <li className="footer-nav-item footerLinkNav">
                  <a href="/#whyus">Why Us</a>
                </li>
                <li className="footer-nav-item footerLinkNav">
                  <a href="/#testimonial">Testimonial</a>
                </li>
                <li className="footer-nav-item footerLinkNav">
                  <a href="/#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-3 footer-col">
              <p className="fs-5 fw-bold mb-3 text-start footerSosmedTitle">Connect with us</p>
              <a href="/" target="_blank" className="footer-sosmed footer-sosmed-first">
                <img src={iconFacebook} alt="sosmed-fb" />
              </a>
              <a href="/" target="_blank" className="footer-sosmed">
                <img src={iconInstagram} alt="sosmed-ig" />
              </a>
              <a href="/" target="_blank" className="footer-sosmed">
                <img src={iconTwitter} alt="sosmed-twitter" />
              </a>
              <a href="/" target="_blank" className="footer-sosmed">
                <img src={iconEmail} alt="sosmed-mail" />
              </a>
              <a href="/" target="_blank" className="footer-sosmed">
                <img src={iconTwitch} alt="sosmed-twitch" />
              </a>
            </div>
            <div className="col-lg-3 footer-4 footer-col">
              <p className="fs-5 fw-bold mb-3 text-start footerCopyright">Copyright Binar 2022</p>
              <img src={logoKotakBiru} alt="Logo Kotak" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default NormalFooter;
