import react from "react";
import { useState } from "react";
import "./index.css";
import iconUsers from "../../../assets/img/fi_users.png";
import LogoCeklis from "./LogoCeklis";
import HeaderPembayaran from "../header/HeaderPembayaran";
import { useLocation } from "react-router-dom";

const PembayaranFirst = (props) => {
  const dataState = useLocation().state;
  const [data, setData] = useState(dataState);
  const [subtotal, setSubtotal] = useState(dataState.mobil.price * dataState.durasi);
  const [statusDetail, setStatusDetail] = useState(false);
  const [status, setStatus] = useState(false); //untuk mengecek tombol pembayaran aktif

  const dataPilihan = {
    namaMobil: { judul: "Nama", value: dataState.mobil.name },
    kategori: { judul: "Kategori", value: dataState.mobil.category },
    tanggalMulai: { judul: "Tanggal Mulai Sewa", value: dataState.tanggalMulai },
    tanggalAkhir: { judul: "Tanggal Berakhir ", value: dataState.tanggalAkhir },
  };
  const [pilihan, setPilihan] = useState(dataPilihan);

  const fakeBank = [
    { status: false, value: "BCA" },
    { status: false, value: "BNI" },
    { status: false, value: "Mandiri" },
  ];
  const [bank, setBank] = useState(fakeBank);
  const handleBank = (res) => {
    const bankLocal = [...fakeBank];
    for (let i = 0; i < fakeBank.length; i++) {
      if (i === res) {
        bankLocal[i].status = true;
      } else {
        bankLocal[i].status = false;
      }
    }
    setStatus(true);
    setBank(bankLocal);
  };

  const biaya = [
    { judul: "Pajak", value: "Termasuk" },
    { judul: "Biaya makan supir", value: "Termasuk" },
  ];
  const [biayaLainnya, setBiaya] = useState(biaya);

  return (
    <>
      <HeaderPembayaran posisi="satu" judul={{ judul: "Pembayaran", text: false }} />
      <div className="pembayaranFirst">
        <div className="detailPesanan">
          {Object.entries(pilihan).map(([keys, value], index) => {
            return (
              <div key={index} className="detail">
                <p className="judulDetailPembayaran">{value.judul}</p>
                <p className="valueDetailPembayaran">{value.value}</p>
              </div>
            );
          })}
        </div>

        <div className="sectionHero">
          <div className="pilihanBank">
            <h3>Pilih Bank Transfermu</h3>
            <p>Kamu bisa membayar dengan Transfer melalui ATM, Internet Banking atau Mobile Banking</p>
            <div className="banks">
              {bank.map((item, index) => {
                return (
                  <button className="logoBank" key={index} onClick={() => handleBank(index)}>
                    <p className="logo">{item.value}</p>
                    <p className="namaLogo">{item.value} Transfer</p>
                    <p className="logoCeklis">{item.status ? <LogoCeklis /> : ""}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="endHero">
            <div className="detailMobil">
              <div className="keteranganMobil">
                <p className="namaMobil">{data.mobil.name}</p>
                <div className="kategoriMobil">
                  <img src={iconUsers} alt="icon User" className="iconPenumpang" />

                  <p>{data.mobil.category}</p>
                </div>
                <p className="harga">Rp {data.mobil.price.toLocaleString("id-ID")}</p>
              </div>

              <img src={data.mobil.image} alt="gambar Mobil" className="gambarMobil" />
            </div>

            <div className="keterangan">
              <div className="totalEnd" onClick={() => setStatusDetail(!statusDetail)}>
                <p className="judul">Total</p>
                <p className="harga">Rp{subtotal.toLocaleString()}</p>
              </div>

              {statusDetail && (
                <div className="detailEndHero">
                  <div className="itemDetail harga">
                    <p className="judulItem">Harga</p>
                    <div className="containerItem">
                      <li>
                        Sewa Mobil Rp.{data.mobil.price.toLocaleString("ID-id")} x{data.durasi} Hari
                      </li>
                      <p className="valueItemDetail"> Rp {subtotal.toLocaleString("ID-id")}</p>
                    </div>
                  </div>

                  <div className="biayaLainnya itemDetail">
                    <p className="judulItem">Biaya Lainnya</p>

                    {biayaLainnya.map((item, index) => {
                      return (
                        <div className="containerItem" key={index}>
                          <li>{item.judul}</li>
                          <p className="valueItemDetail">{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="itemDetail belumTermasuk">
                    <p className="judulItem">Belum Termasuk</p>
                    <div className="containerItem">
                      <li>Bensin</li>
                    </div>
                    <div className="containerItem">
                      <li>Tol dan Parkir</li>
                    </div>
                  </div>

                  <div className="subtotal">
                    <p className="judul">Total</p>
                    <p className="value">Rp {subtotal.toLocaleString()}</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => {
                  const jenisBank = bank.filter((res) => res.status === true);
                  const data = {
                    jenisBank: jenisBank[0].value,
                    subtotal,
                  };

                  props.changeElement(data);
                }}
                className={(status ? "statusTrue" : "") + " tombolBayar"}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PembayaranFirst;
