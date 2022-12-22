import React from "react";
import "./SectionCallToAction.css";

const SectionCallToAction = () => {
  return (
    <section id="cta" className="">
      <div className="container container-cta">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-4 text-center text-white heading-cta">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="fs-5 fw-bold text-center text-white desc-cta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" className="btn button-cta text-white">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCallToAction;
