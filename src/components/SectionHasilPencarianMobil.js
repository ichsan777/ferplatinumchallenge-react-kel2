import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./SectionHasilPencarianMobil.css";
import CardMobil from "./CardMobil";

const SectionHasilPencarianMobil = () => {
  // declaring variable
  const [cars, setCars] = useState([]);
  var filteredCars = [];
  const location = useLocation();
  const filterArr = location.state;

  useEffect(() => {
    //get data from api
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };

    axios
      .get(`${urlAPI}/admin/v2/car`, config)
      .then(async (res) => {
        const tempCars = await res.data.cars;
        setCars(tempCars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // filter function
  const filteringCars = () => {
    // filtering array cars
    // filtering nama dahulu
    if (filterArr.namaMobil !== "") {
      filteredCars = filteredCars.filter((obj) => obj.name.toLowerCase().indexOf(filterArr.namaMobil.toLowerCase()) >= 0);
    }
    // filtering kategori
    if (filterArr.kategoriMobil !== "default") {
      filteredCars = filteredCars.filter((obj) => obj.category === filterArr.kategoriMobil);
    }
    // filtering Price
    if (filterArr.hargaMobil === "under400") {
      filteredCars = filteredCars.filter((obj) => obj.price < 400000);
    } else if (filterArr.hargaMobil === "400600") {
      filteredCars = filteredCars.filter((obj) => obj.price >= 400000 && obj.price <= 600000);
    } else if (filterArr.hargaMobil === "above400") {
      filteredCars = filteredCars.filter((obj) => obj.price > 400000);
    }
    // filtering status
    filteredCars = filteredCars.filter((obj) => obj.status === filterArr.statusMobil);
  };

  // check hasil data filtering
  filteredCars = cars;
  filteringCars(filteredCars);
  // check apabila array filtered cars kosong karena hasil filter tidak ditemukan, dan reassign data
  // if (filteredCars.length === 0) {
  //   filteredCars = cars;
  // }

  console.log(filterArr);

  return (
    <section id="hasilPencarian">
      <div className="container">
        <div className="row rowContainer">
          <div className="col">
            <div className="row">
              {filteredCars?.map((car) => {
                return <CardMobil name={car.name} image={car.image} price={car.price} carID={car.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHasilPencarianMobil;
