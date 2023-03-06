import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import "./SectionDetailMobil.css";
import iconUsers from "../assets/img/fi_users.png";
import AirDatepicker from "air-datepicker";
import en from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import { useNavigate } from "react-router-dom";

const SectionDetailMobil = () => {
  // declaring variable
  const [car, setCar] = useState([]);
  const [rangeDate, setRangeDate] = useState(null);
  const [durasi, setDurasi] = useState(0);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().state;
  const idMobil = location ? location.idMobil : null;

  // const [data, setData] = useState({})

  const handleTanggal = async (e) => {
    const value = e.target.value; // 12/01/2022, 13/01/2022
    //logic menghitung tanggal

    const [start, end] = value.split(",");

    if (!end) {
      setDurasi(0);
      return false;
    }

    const lamaHari = () => {
      let hasil = 0;
      const [dateStart, monthStart, yearStart] = start.split("/");
      // 12/01/2022

      const [dateEnd, monthEnd, yearEnd] = end.split("/");

      const intMonthStart = parseInt(monthStart);
      const intMonthEnd = parseInt(monthEnd);

      // jika lebih dari 1 bulan"
      // februari - maret
      if (monthStart !== monthEnd || yearStart !== yearEnd) {
        //jika berbeda hanya 1 bulan

        const dateFake = new Date(yearStart, intMonthStart, 1); // 01/02/2022

        dateFake.setDate(dateFake.getDate() - 1); // 31/01/2022

        // misal mulai dari tanggal 5 maret sampe 6 april
        // dateFake akan menghasilkan bulan start berikutnya (maret jadi april) tanggal 1
        // dan akan dikurangi 1 hari untuk mengambil tanggal akhir maret ( 31 - 5 = 26)
        // tanggal akhir maret lalu dikurangin tanggal start setelah itu ditambah tanggal akhir (26 + 6 = 32)
        let endDate = parseInt(dateFake.toString().split(" ")[2]);
        hasil += endDate - parseInt(dateStart) + parseInt(dateEnd);

        let differentMonth;

        const differentYear = parseInt(yearEnd) - parseInt(yearStart);

        if (differentYear > 0) {
          differentMonth = 12 - intMonthStart + intMonthEnd;
        } else {
          differentMonth = intMonthEnd - intMonthStart;
        }

        if (differentMonth !== 0) {
          let i = 1;

          while (i < differentMonth) {
            //misal dia milih bulan februari - april maka kode dibawah akan menghasilkan bulan april
            // parseInt(monthStart) return 02, karna setMonth parameternya bulan - 1 maka kita tambah i (karna dimulai dari 1)
            // jadi setMonth mengembalikan bulan april yang nantinya akan diambil bulan sebelumnya (maret untuk dianbil tanggal akhirnya)

            dateFake.setMonth(intMonthStart + i);
            const getMount = dateFake.getMonth() + 1;
            if (getMount > 12) {
              dateFake.setMonth(intMonthStart + i - 12);

              dateFake.setFullYear(yearStart + 1);
            }

            dateFake.setDate(1 - 1);
            const dateInMonth = parseInt(dateFake.toString().split(" ")[2]);
            hasil += dateInMonth;
            // hasil += endDate
            i += 1;
          }
        }
      } else {
        hasil += dateEnd - dateStart;
      }
      setRangeDate([start, end]);
      return hasil;
    };
    setDurasi(lamaHari());
  };

  function handlePembayaran(e) {
    e.preventDefault();

    if (durasi !== 0) {
      if (durasi > 7) {
        alert("Sewa mobil maksimal 7 hari");
        return false;
      }
      const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sep", "Okt", "Nov", "Des"];

      const [start, end] = rangeDate;

      const monthStart = parseInt(start.split("/")[1]);
      const monthEnd = parseInt(end.split("/")[1]);

      const dateStart = start.split("/")[0] + " " + months[monthStart - 1] + " " + start.split("/")[2];
      const dateEnd = end.split("/")[0] + " " + months[monthEnd - 1] + " " + end.split("/")[2];

      const config = {
        state: {
          tanggalMulai: dateStart,
          tanggalAkhir: dateEnd,
          mobil: car,
          durasi,
        },
      };

      navigate("/pembayaran", config);
    }
  }

  useEffect(() => {
    if (durasi === 0) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [durasi]);

  // HIT API
  useEffect(() => {
    //get data from api
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };

    const options = {
      locale: en,
      range: true,
      dateFormat: "dd/MM/yyyy",
    };

    const tanggalSewa = new AirDatepicker("#tanggalSewa", options);

    axios
      .get(`${urlAPI}/admin/car/${idMobil}`, config)
      .then(async (res) => {
        const tempCar = await res.data;
        setCar(tempCar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!idMobil) {
    navigate("/cariMobil");
  }
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
              <div className="tanggalSewa">
                <label htmlFor="tanggalSewa" className="judulTanggal">
                  Tentukan lama sewa mobil. (max 7hari)
                </label>
                <input type="text" id="tanggalSewa" onSelect={handleTanggal} placeholder="Pilih tanggal mulai dan akhir sewa" readOnly />
              </div>

              <div className="row rowHarga">
                <div className="hargaRow">
                  <h3 className="priceTitle">Total</h3>
                  <h3 className="priceNumber">Rp. {durasi === 0 ? car.price : car.price * durasi} </h3>
                </div>

                <button className={"tombolPembayaran " + (active ? `activeTombol` : "")} onClick={handlePembayaran}>
                  {" "}
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDetailMobil;
