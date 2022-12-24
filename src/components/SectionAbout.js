import React from "react";
import "./SectionAbout.css";
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
              <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li>Sewa Mobil Jangka Panjang Bulanan</li>
              <li>Gratis Antar - Jemput Mobil di Bandara</li>
              <li>Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
