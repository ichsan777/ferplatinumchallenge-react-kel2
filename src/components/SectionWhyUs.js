import React from "react";
import "./SectionWhyUs.css";
import IconComplete from "../assets/img/icon_complete.png";
import IconPrice from "../assets/img/icon_price.png";
import Icon24H from "../assets/img/icon_24hrs.png";
import IconProfessional from "../assets/img/icon_professional.png";

const SectionWhyUs = () => {
  return (
    <section id="whyus" className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="fs-1 fw-bold mb-4 sectionTitle">Why Us?</h2>
            <p className="fs-5 fw-bold mb-5 sectionSubtitle">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-2">
                <div className="card h-100 custom-Card-Whyus">
                  <div className="card-body">
                    <img src={IconComplete} className="img-fluid mb-4" alt="icon complete"></img>
                    <h3 className="whyusTitle fs-4 fw-bold mb-4">Mobil Lengkap</h3>
                    <p className="whyusSubtitle fs-5 fw-bold mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div className="card h-100 custom-Card-Whyus">
                  <div className="card-body">
                    <img src={IconPrice} className="img-fluid mb-4" alt="icon price"></img>
                    <h3 className="whyusTitle fs-4 fw-bold mb-4">Harga Murah</h3>
                    <p className="whyusSubtitle fs-5 fw-bold mb-2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div className="card h-100 custom-Card-Whyus">
                  <div className="card-body">
                    <img src={Icon24H} className="img-fluid mb-4" alt="icon 24h"></img>
                    <h3 className="whyusTitle fs-4 fw-bold mb-4">Layanan 24 Jam</h3>
                    <p className="whyusSubtitle fs-5 fw-bold mb-2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-2">
                <div className="card h-100 custom-Card-Whyus">
                  <div className="card-body">
                    <img src={IconProfessional} className="img-fluid mb-4" alt="icon professional"></img>
                    <h3 className="whyusTitle fs-4 fw-bold mb-4">Sopir Profesional</h3>
                    <p className="whyusSubtitle fs-5 fw-bold mb-2">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyUs;
