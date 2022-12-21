import React from "react";
import "./SectionAbout.css";
import IconCheckmark from "../assets/img/Group 53.png";
import AboutHero from "../assets/img/img_service.png";

const SectionAbout = () => {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <img src={AboutHero} alt="services" className="img-fluid about-img" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 fs-1 fw-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="fs-5 fw-bold">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="fa-ul about-list fs-5 fw-bold">
              <li>
                <p>
                  <img src={IconCheckmark} alt="icon checkmark" className="img-fluid imgCheckmark"></img>Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </li>
              <li>
                <p>
                  <img src={IconCheckmark} alt="icon checkmark" className="img-fluid imgCheckmark"></img>Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </li>
              <li>
                <p>
                  <img src={IconCheckmark} alt="icon checkmark" className="img-fluid imgCheckmark"></img>Sewa Mobil Jangka Panjang Bulanan
                </p>
              </li>
              <li>
                <p>
                  <img src={IconCheckmark} alt="icon checkmark" className="img-fluid imgCheckmark"></img>Gratis Antar - Jemput Mobil di Bandara
                </p>
              </li>
              <li>
                <p>
                  <img src={IconCheckmark} alt="icon checkmark" className="img-fluid imgCheckmark"></img>Layanan Airport Transfer / Drop In Out
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
