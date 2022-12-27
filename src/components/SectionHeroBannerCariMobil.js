import React from "react";
import "./SectionHeroBannerCariMobil.css";
import GambarMobil from "../assets/img/Mercedes Car EQC 300kW Edition - 900x598 1.png";

const SectionHeroBannerCariMobil = () => {
  return (
    <section id="heroBannerCariMobil" className="pt-5 bg-banner">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-5">
            <div className="banner-left">
              <h1 className="fw-bold sectionTitle">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="fs-5 fw-bold mt-4 mb-3 sectionSubtitle">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
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

export default SectionHeroBannerCariMobil;
