import React from "react";
import downloadButton from "../assets/img/downloadButton.png";
import icon1 from "../assets/img/PDFdonwloadHeader1.png";
import icon2 from "../assets/img/PDFdonwloadHeader2.png";
import success from "../assets/img/success.png";
import view from "../assets/img/pdfView.png";
import "./SectionpdfDownload.css";

const SectionpdfDownload = () => {
  return (
    <div id="SectionpdfDownload">
      <div className="container-fluid">
        <div className="  justify-content-center row pdfHeader">
          <div className="col-6 p-3 ">
            <img src={icon2} className="icon2" alt="err" />
          </div>
          <div className="col-2 p-3 me-n3 ">
            <img src={icon1} className="icon1" alt="err" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mt-5 ">
        <div className="d-flex justify-content-center">
          <img src={success} className="iconSuccess" alt="err" />
        </div>
        <div className="text1 text-center">Pembayaran Berhasil!</div>
        <div className="text2 text-center">Tunjukkan invoice ini ke petugas BCR di titik temu.</div>
      </div>
      <div className="d-flex flex-column justify-content-center group mt-5 mb-5 border rounded">
        <div className="d-flex flex-row justify-content-between p-3 ms-5">
          <div className="text1">Invoice</div>
          <div>
            <a href="Thanks.pdf" download="Thanks.pdf">
              <button className="button">
                <img src={downloadButton} className="icondownload" alt="err" />
              </button>
            </a>
          </div>
        </div>

        <div className="text2 ms-5 p-3">Order ID: xxxxx</div>
        <div className="d-flex justify-content-center mb-3">
          <img src={view} className="icondownload view" alt="err" />
        </div>
      </div>
    </div>
  );
};

export default SectionpdfDownload;
