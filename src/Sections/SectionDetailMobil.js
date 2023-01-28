import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
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
                <li key="include-1">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li key="include-2">Sudah termasuk bensin selama 12 jam</li>
                <li key="include-3">Sudah termasuk Tiket Wisata</li>
                <li key="include-4">Sudah termasuk pajak</li>
              </ul>
              <h3 className="detailSubtitle">Exclude</h3>
              <ul className="detailList">
                <li key="exclude-1">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li key="exclude-2">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li key="exclude-3">Tidak termasuk akomodasi penginapan</li>
              </ul>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="detailSubtitle">Refund, Reschedule, Overtime</Accordion.Header>
                  <Accordion.Body>
                    <ul className="detailList">
                      <li key="refund-1">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li key="refund-2">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li key="refund-3">Tidak termasuk akomodasi penginapan</li>
                      <li key="refund-4">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li key="refund-5">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li key="refund-6">Tidak termasuk akomodasi penginapan</li>
                      <li key="refund-7">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li key="refund-8">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li key="refund-9">Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                  <h3 className="priceTitle">Total</h3>
                </div>
                <div className="col-lg-6 text-end">
                  <h3 className="priceNumber">Rp. {car.price}</h3>
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
