import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardMobil.css";

const CardMobil = (props) => {
  const carID = props.carID;

  const navigate = useNavigate();
  const handlePilihMobil = (idMobil) => {
    navigate("/detailmobil", { state: { idMobil: idMobil } });
  };

  return (
    <div className="col-lg-4">
      <div className="card cardMobil">
        <div className="card-body">
          <img src={props.image} alt="Gambar Mobil" className="gambarMobil img-fluid mx-auto d-block w-100" />
          <h6 className="namaMobil">{props.name}</h6>
          <h5 className="hargaMobil">{props.price} / hari</h5>
          <p className="deskripsiMobil">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="d-grid">
            <button className="btn btnPilihMobil" onClick={() => handlePilihMobil(carID)}>
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMobil;
