import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./SectionHasilPencarianMobil.css";
import CardMobil from "./CardMobil";

const SectionHasilPencarianMobil = () => {
  const [cars, setCars] = useState([]);
  const location = useLocation();
  const filterArr = location.state;

  useEffect(() => {
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };

    axios
      .get(`${urlAPI}/admin/v2/car`, config)
      .then((res) => {
        const tempCars = res.data.cars;
        setCars(tempCars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="hasilPencarian">
      <div className="container">
        <div className="row rowContainer">
          <div className="col">
            <div className="row">
              {cars?.map((car) => {
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
