import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./SectionDetailMobil.css";
import iconUsers from "../assets/img/fi_users.png";

const SectionDetailMobil = () => {
  // declaring variable
  const [car, setCar] = useState([]);
  const location = useLocation();
  const carID = location.state.idMobil;

  useEffect(() => {
    //get data from api
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };

    axios
      .get(`${urlAPI}/admin/car/${carID}`, config)
      .then(async (res) => {
        const tempCar = await res.data;
        setCar(tempCar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [carID]);

  return (
    <section id="detail-mobil">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 kolomKiri">
            <div className="kolomKiriInner">
              <h2 className="detailTitle">Tentang Paket</h2>
              <h3 className="detailSubtitle">Include</h3>
              <ul className="detailList">
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h3 className="detailSubtitle">Exclude</h3>
              <ul className="detailList">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <div className="accordion mt-2" id="refundAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed detailSubtitle" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                      Refund, Reschedule, Overtime
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#refundAccordion">
                    <div className="accordion-body">
                      <ul className="detailList">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 kolomKanan">
            <div className="kolomKananInner">
              <img src={car.image} alt="Gambar Mobil" className="img-fluid mx-auto d-block imageMobil" />
              <h3 className="detailSubtitle mb-0">{car.name}</h3>
              <p className="jumlahPenumpangText">
                <img src={iconUsers} alt="icon User" className="iconPenumpang" />
                {car.category}
              </p>
              <div className="row rowHarga">
                <div className="col-lg-6 text-start">
                  <h3>Total</h3>
                </div>
                <div className="col-lg-6 text-end">
                  <h3>Rp. {car.price}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDetailMobil;
