import React from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderPembayaran(props) {
  const [posisi, setPosisi] = useState(props.posisi);
  const idMobil = useLocation().state.mobil.id;
  const navigate = useNavigate();
  const [judul, setJudul] = useState(props.judul);

  const redirect = () => {
    navigate("/detailMobil", { state: { idMobil } });
  };
  return (
    <div className={"headerPembayaran " + (props.second ? " second " : " ")}>
      <div className="judulHeader">
        <svg onClick={redirect} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
        <div className="judulText">
          <p className="judul">
            {judul.judul} {judul.text && "transfer"}{" "}
          </p>
          <p className="text">{judul.text && judul.text}</p>
        </div>
      </div>

      <div className="endHeader">
        <p className="process firstProcess">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-1-circle angka " + (posisi === "satu" || posisi === "dua" ? " blue " : " ")} viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
          </svg>{" "}
          Pilih Metode
        </p>
        <p className="process secondProcess">
          {/* setrip  */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" className={posisi === "dua" ? "blue" : ""} height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.5 14.5q-.775 0-1.4-.425q-.625-.425-.9-1.075H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h14.2q.275-.65.9-1.075q.625-.425 1.4-.425q1.05 0 1.775.725Q22 10.95 22 12q0 1.05-.725 1.775q-.725.725-1.775.725Z"
            />
          </svg>
          {/* end setrip */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-2-circle angka" + (posisi === "dua" ? " blue " : " ")} viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
          </svg>{" "}
          Bayar
        </p>
        <p className="process endProcess">
          {/* setrip  */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.5 14.5q-.775 0-1.4-.425q-.625-.425-.9-1.075H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h14.2q.275-.65.9-1.075q.625-.425 1.4-.425q1.05 0 1.775.725Q22 10.95 22 12q0 1.05-.725 1.775q-.725.725-1.775.725Z"
            />
          </svg>
          {/* end setrip */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-3-circle angka" viewBox="0 0 16 16">
            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>{" "}
          Tiket
        </p>
      </div>
    </div>
  );
}
