import React from "react";
import "./SectionAbout.css";
import AboutHero from "../assets/img/img_service.png";

const SectionAbout = () => {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 d-flex justify-content-center">
            <img src={AboutHero} alt="services" className="img-fluid about-img" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 fs-1 fw-bold sectionTitle">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="fs-5 fw-bold sectionSubtitle">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="fa-ul about-list fs-5 fw-bold">
              <li key="about-1">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li key="about-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li key="about-3">Sewa Mobil Jangka Panjang Bulanan</li>
              <li key="about-4">Gratis Antar - Jemput Mobil di Bandara</li>
              <li key="about-5">Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
