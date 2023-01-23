import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionHeroBanner.css";
import GambarMobil from "../assets/img/Mercedes Car EQC 300kW Edition - 900x598 1.png";

const SectionHeroBanner = () => {
  const navigate = useNavigate();
  const handleButtonCariMobil = () => {
    navigate("/carimobil");
  };

  return (
    <section id="hero-banner" className="pt-5 bg-banner">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-end">
          <div className="col-xxl-5 col-lg-5">
            <div className="banner-left">
              <h1 className="fw-bold banner-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="fs-5 fw-bold mt-4 mb-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <button className="btn btn-success btn-lg buttonSewaMobil" onClick={handleButtonCariMobil}>
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
          <div className="col-lg-6 position-relative pb-10 banner-right">
            <img src={GambarMobil} alt="mobil-mercedes" className="banner-img position-absolute bottom-0 img-fluid" />
            <div className="bg-primary banner-shape position-absolute bottom-0 end-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeroBanner;
