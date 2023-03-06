import React from "react";
import PembayaranFirst from "./pembayaranFirst/PembayaranFirst";
import "./index.css";
import HeaderPembayaran from "./header/HeaderPembayaran";
import { useState } from "react";
import NextPembayaran from "./NextPembayaran/NextPembayaran";

export default function PagePembayaran() {
  const [data, setData] = useState(null);
  const [process, setProcess] = useState("first");
  const handleChange = (res) => {
    setData(res);
    setProcess("second");
  };
  return <div className="PagePembayaran">{process === "first" ? <PembayaranFirst changeElement={handleChange} /> : <NextPembayaran data={data} />}</div>;
}
