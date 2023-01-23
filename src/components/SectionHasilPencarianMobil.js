import React from "react";
import { useSelector } from "react-redux";
import { selectCarsState } from "../redux/carSlice";
import { selectFiltersState } from "../redux/filterSlice";
import "./SectionHasilPencarianMobil.css";
import CardMobil from "./CardMobil";

const SectionHasilPencarianMobil = () => {
  // declaring variable
  const cars = useSelector(selectCarsState);
  var filteredCars = [];
  const filterArr = useSelector(selectFiltersState);

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

  return (
    <section id="hasilPencarian">
      <div className="container">
        <div className="row rowContainer">
          <div className="col">
            <div className="row">
              {filteredCars?.map((car, index) => {
                return <CardMobil key={index} name={car.name} image={car.image} price={car.price} carID={car.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHasilPencarianMobil;
