import React from "react";
import "./SectionFormDetailMobil.css";

const SectionFormDetailMobil = () => {
  return (
    <section id="formPencarianDetailMobil">
      <div className="container">
        <div className="row form-box">
          <div className="col-lg-12">
            <form className="row g-2">
              <div className="col-lg">
                <label htmlFor="namaMobil" className="form-label">
                  Nama Mobil
                </label>
                <input id="namaMobil" type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil" disabled />
              </div>
              <div className="col-lg">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
                </label>
                <select defaultValue="default" id="kategoriMobil" className="form-select" aria-label="Default select example" disabled>
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
                <select defaultValue="default" id="hargaMobil" className="form-select" aria-label="Default select example" disabled>
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
                <select id="statusMobil" className="form-select" aria-label="Default select example" disabled>
                  <option value={true}>Disewa</option>
                  <option value={false}>Free</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormDetailMobil;
