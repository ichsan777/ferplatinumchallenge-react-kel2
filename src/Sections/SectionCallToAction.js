import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionCallToAction.css";

const SectionCallToAction = () => {
  const navigate = useNavigate();
  const handleButtonCTA = () => {
    navigate("/carimobil");
  };

  return (
    <section id="cta" className="">
      <div className="container container-cta">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-4 text-center text-white sectionTitle">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="fs-5 fw-bold text-center text-white sectionSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" className="btn buttonCta text-white" onClick={handleButtonCTA}>
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCallToAction;
