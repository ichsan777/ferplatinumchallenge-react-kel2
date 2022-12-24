import React from "react";
import "./SectionFormHasilCariMobil.css";

const SectionFormHasilCariMobil = () => {
  return (
    <section id="formPencarianHasilMobil">
      <div className="container">
        <div className="row form-box">
          <div className="col-lg-12">
            <form className="row g-2">
              <div className="col-lg">
                <label htmlFor="namaMobil" className="form-label">
                  Nama Mobil
                </label>
                <input id="namaMobil" type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil" />
              </div>
              <div className="col-lg">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
                </label>
                <select defaultValue={"default"} id="kategoriMobil" className="form-select" aria-label="Default select example">
                  <option value="default" disabled>
                    Masukan Kapasitas Mobil
                  </option>
                  <option value="2to4">2 - 4 orang</option>
                  <option value="4to6">4 - 6 orang</option>
                  <option value="6to8">6 - 8 orang</option>
                </select>
              </div>
              <div className="col-lg">
                <label htmlFor="hargaMobil" className="form-label">
                  Harga
                </label>
                <select defaultValue={"default"} id="hargaMobil" className="form-select" aria-label="Default select example">
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
                <select defaultValue={"disewa"} id="statusMobil" className="form-select" aria-label="Default select example">
                  <option value="disewa">Disewa</option>
                  <option value="free">Free</option>
                </select>
              </div>
              <div className="col-lg-1 submitColumn">
                <button type="submit" className="btn btn-primary buttonSubmit">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormHasilCariMobil;
