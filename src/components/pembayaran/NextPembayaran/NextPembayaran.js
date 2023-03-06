import "./index.css";
import { useState, useEffect } from "react";
import HeaderPembayaran from "../header/HeaderPembayaran";
import { useNavigate } from "react-router-dom";

export default function NextPembayaran(props) {
  const navigate = useNavigate();
  const { data } = props;
  const [total, setTotal] = useState(data.subtotal);
  const [batasWaktu, setBatasWaktu] = useState(null);

  const [bank, setBank] = useState({ nama: "Binar Car Rental", id: 57612384225, jenis: data.jenisBank });
  const nav = [
    { name: `ATM ${data.jenisBank}`, status: true },
    { name: `M-${data.jenisBank}`, status: false },
    { name: `${data.jenisBank} klik`, status: false },
    { name: `Internet Banking`, status: false },
  ];
  const [navs, setNavs] = useState(nav);
  const handleNavigasi = (index) => {
    const fakeNav = [...navs];
    for (let i = 0; i < fakeNav.length; i++) {
      if (i == index) {
        fakeNav[i].status = true;
      } else {
        fakeNav[i].status = false;
      }
    }
    setNavs(fakeNav);
  };
  const [dateTime, setDateTime] = useState(null);
  const filterWaktu = (value) => {
    const [date, time, day] = value.split(" ");

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desmber"];
    const [tanggal, bulan, tahun] = date.split("/");
    const [jam, menit, detik] = time.split(".");
    const nameMonth = months[bulan - 1];

    const dateTime = {
      namaHari: day,
      namaBulan: nameMonth,
      tanggal,
      bulan,
      tahun,
      jam,
      menit,
      detik,
    };

    const batasWaktu = new Date(tahun, bulan, tanggal, jam, menit, detik);
    setBatasWaktu(batasWaktu);
    return dateTime;
  };

  // mengurangi waktu
  const [lessTime, setLessTime] = useState(null);

  useEffect(() => {
    const nameStorage = "waktuPembayaranBinar";
    const waktuLocal = localStorage.getItem(nameStorage);

    if (!waktuLocal) {
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
      const waktuSekarang = new Date();
      waktuSekarang.setDate(waktuSekarang.getDate() + 1);
      const hari = days[parseInt(waktuSekarang.getDay())];
      const options = {
        timezone: "Asia/Jakarta",
      };
      const waktuJakarta = waktuSekarang.toLocaleString("id-ID", options);

      localStorage.setItem(nameStorage, waktuJakarta.toString() + " " + hari);
    }

    const getWaktu = localStorage.getItem(nameStorage);
    const batasPembayaran = filterWaktu(getWaktu);
    setDateTime(batasPembayaran);

    setInterval(() => {
      const nowTime = new Date();
      const nowTimeJakarta = nowTime.toLocaleString("id-ID", { timezone: "Asia/Jakarta" }).split(" ")[1].split(".");
      const [hourNow, minutesNow, secondsNow] = nowTimeJakarta;

      const deadline = getWaktu.split(" ")[1].split(".");
      const [hourDeadline, minutesDeadline, secondsDeadline] = deadline;

      // pengurangan
      let secondsDifference = parseInt(secondsDeadline) - parseInt(secondsNow);

      let minutesDifference = parseInt(minutesDeadline) - parseInt(minutesNow);

      let hourDifference = parseInt(hourDeadline) - parseInt(hourNow);
      hourDifference += 24;

      if (secondsDifference < 0) {
        secondsDifference += 60;
        minutesDifference -= 1;
      }
      if (minutesDifference < 0) {
        minutesDifference += 60;
        hourDifference -= 1;
        if (hourDifference < 0) {
          alert("Waktu pembayaran telah habis");
          localStorage.removeItem(nameStorage);
          return false;
        }
      }

      const timeDifference = {
        hour: hourDifference,
        minutes: minutesDifference,
        seconds: secondsDifference,
      };
      setLessTime(timeDifference);
    }, 1000);
  }, []);

  const [image, setImage] = useState(null);

  const tahapTiga = (e) => {
    const handleGambar = () => {
      const file = e.target.files[0];
      const splitExt = file.name.split(".");

      // logic selain gambar
      const ext = splitExt[splitExt.length - 1].toLowerCase();
      const allowExt = ["jpg", "jpeg", "png"];
      if (!allowExt.includes(ext)) {
        alert("fie yang anda masukkan bukan gambar");
        return false;
      }

      // logic jika melebihi 5mb
      const allowSize = 5000000; //5mb
      const size = file.size;
      if (size > allowSize) {
        alert("Ukuran Maksimal gambar 5mb");
        return false;
      }

      const urlImage = URL.createObjectURL(file);
      setImage(urlImage);

      return true;
    };
    const middle = handleGambar();
    if (!middle) {
      return false;
    }
    function sukses(e) {
      navigate("/pdfdownload");
    }
    const konfirmasi = {
      judul: "Konfirmasi Pembayaran",
      judulButton: "Konfirmasi",
      text: `Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.`,
      text2: `Upload Bukti Pembayaran

            Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu`,
      myFunction: sukses,
    };
    setKonfirmasi(konfirmasi);
  };
  const tahapDua = () => {
    const konfirmasi = {
      judul: "Konfirmasi Pembayaran",
      judulButton: "Upload",
      text: `Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.`,
      text2: `Upload Bukti Pembayaran
            Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu`,
      myFunction: tahapTiga,
    };
    setKonfirmasi(konfirmasi);
  };

  const [konfirmasi, setKonfirmasi] = useState({
    judul: false,
    judulButton: "Konfirmasi Pembayaran",
    text: "Klik konfirmasi pembayaran untuk mempercepat proses pengecekan",
    text2: ``,
    myFunction: tahapDua,
  });

  return (
    <>
      <HeaderPembayaran posisi="dua" second={true} judul={{ judul: data.jenisBank, text: "Order ID: xxxxxx" }} />

      <div className="nextPembayaran">
        <div className={"startHero " + (konfirmasi.judulButton !== "Konfirmasi Pembayaran" && " noneHp ")}>
          <div className="timeBayar">
            {dateTime && (
              <div className="containerJudul">
                <h3 className="judul">Selesaikan Pembayaran Sebelum</h3>
                <p className="textTime">
                  {dateTime.namaHari}, {dateTime.tanggal} {dateTime.namaBulan} {dateTime.tahun} jam {dateTime.jam}.{dateTime.menit} WIB
                </p>
              </div>
            )}
            {lessTime && (
              <p className="time">
                <span className="child">
                  {lessTime.hour < 10 && "0"}
                  {lessTime.hour}
                </span>{" "}
                :{" "}
                <span className="child">
                  {lessTime.minutes < 10 && "0"}
                  {lessTime.minutes}
                </span>{" "}
                :
                <span className="child">
                  {lessTime.seconds < 10 && "0"}
                  {lessTime.seconds}
                </span>
              </p>
            )}
          </div>

          <div className="nextTransfer">
            <h3 className="judul">Lakukan Transfer Ke</h3>

            <div className="jenisBank">
              <p className="logoBank">{bank.jenis}</p>
              <div className="detailBank">
                <p className="namaBank">{bank.jenis} Transfer</p>
                <p className="namaPemilik">a.n {bank.nama}</p>
              </div>
            </div>

            <div className="inputUser">
              <label htmlFor="nomor">Nomor Rekening</label>
              <p id="nomor" type="text">
                {bank.id}

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2" viewBox="0 0 16 16">
                  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z" />
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                </svg>
              </p>
            </div>

            <div className="inputUser">
              <label htmlFor="total">Total Bayar</label>
              <p id="total" className="total">
                Rp {total.toLocaleString("ID-id")}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2" viewBox="0 0 16 16">
                  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z" />
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                </svg>
              </p>
            </div>
          </div>
          {/* END NEXT TRANSFER */}

          {/* START INSTRUKSI PEMBAYARAN  */}
          <div className="instruksiPembayaran">
            <h3 className="judul">Instruksi Pembayaran</h3>

            <div className="navsInstruksi">
              {navs.map((res, index) => {
                return (
                  <button onClick={() => handleNavigasi(index)} key={index} className={(res.status ? " instruksiActive " : " ") + "tombolNavs"}>
                    {res.name}
                  </button>
                );
              })}
            </div>

            <div className="instruksi">
              <li>Masukkan kartu ATM, lalu PIN</li>
              <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
              <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
              <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
              <li> Ambil dan simpanlah bukti transaksi tersebut</li>
            </div>
          </div>
          {/* END INSTRUKSI PEMBAYARAN */}
        </div>

        {/* AKHIR START HERO  */}

        {/* AWAL END HERO */}
        <div className="endHero">
          {konfirmasi && (
            <div className="konfirmasiPembayaran">
              {konfirmasi.judul && <p className="judul">{konfirmasi.judul}</p>}
              {konfirmasi.text && (
                <p className="judulPembayaran">
                  {konfirmasi.text} <br /> <br />
                  {konfirmasi.text2}
                </p>
              )}
              {konfirmasi.judul === "Konfirmasi Pembayaran" && (
                <div className="gambarPreview">
                  {image ? (
                    <img src={image} alt="gambar bukti pembayaran" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                  )}
                </div>
              )}

              <div className="containerKonfirmasi">
                <p className="judul">Klik Konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                {konfirmasi.judulButton === "Upload" ? (
                  <button className="tombolKonfirmasi">
                    {konfirmasi.judulButton}
                    <input type="file" className="inputFile" onChange={konfirmasi.myFunction} />
                  </button>
                ) : (
                  <button onClick={konfirmasi.myFunction} className="tombolKonfirmasi">
                    {konfirmasi.judulButton}
                  </button>
                )}

                <button className="tombolKonfirmasi tombolPesanan">Lihat Daftar Pesanan</button>
              </div>
            </div>
          )}
        </div>
        {/* AKHIR END HERO  */}
      </div>
    </>
  );
}
