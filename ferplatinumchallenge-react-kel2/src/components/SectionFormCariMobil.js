import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SectionFormCariMobil.css";

const initialValues = {
  namaMobil: "",
  kategoriMobil: "default",
  hargaMobil: "default",
  statusMobil: false,
};

const SectionFormCariMobil = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.statusMobil = values.statusMobil === "true" ? true : false;
    navigate("/hasilcari", { state: { namaMobil: values.namaMobil, kategoriMobil: values.kategoriMobil, hargaMobil: values.hargaMobil, statusMobil: values.statusMobil } });
  };

  return (
    <section id="formPencarianCariMobil">
      <div className="container">
        <div className="row form-box">
          <div className="col-lg-12">
            <form className="row g-2" onSubmit={handleSubmit}>
              <div className="col-lg">
                <label htmlFor="namaMobil" className="form-label">
                  Nama Mobil
                </label>
                <input id="namaMobil" name="namaMobil" defaultValue={values.namaMobil} onChange={handleInputChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil" />
              </div>
              <div className="col-lg">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
                </label>
                <select id="kategoriMobil" name="kategoriMobil" defaultValue={values.kategoriMobil} onChange={handleInputChange} className="form-select" aria-label="Default select example">
                  <option value="default" disabled>
                    Masukan Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </select>
              </div>
              <div className="col-lg">
                <label htmlFor="hargaMobil" className="form-label">
                  Harga
                </label>
                <select id="hargaMobil" name="hargaMobil" defaultValue={values.hargaMobil} onChange={handleInputChange} className="form-select" aria-label="Default select example">
                  <option value="default" disabled>
                    Masukan Harga Sewa per Hari
                  </option>
                  <option value="under400">&#60; Rp. 400.000</option>
                  <option value="400600">Rp. 400.000 - Rp. 600.000</option>
                  <option value="above400">&#62; Rp. 400.000</option>
                </select>
              </div>
              <div className="col-lg">
                <label htmlFor="statusMobil" className="form-label">
                  Status
                </label>
                <select id="statusMobil" name="statusMobil" defaultValue={values.statusMobil} onChange={handleInputChange} className="form-select" aria-label="Default select example">
                  <option value={true}>Disewa</option>
                  <option value={false}>Free</option>
                </select>
              </div>
              <div className="col-lg-1 submitColumn">
                <button type="submit" className="btn btn-primary buttonSubmit">
                  Cari Mobil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormCariMobil;
