import React from "react";
import { useDispatch } from "react-redux";
import { setCars } from "../redux/carSlice";
import { setFilters } from "../redux/filterSlice";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionFormHasilCariMobil from "../components/SectionFormHasilCariMobil";
import SectionHasilPencarianMobil from "../components/SectionHasilPencarianMobil";

const PageHasilCari = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setFilters(location.state));
  }, [dispatch, location.state]);

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
        dispatch(setCars(tempCars));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="pageHasilCari">
      <SectionPageTitle />
      <SectionFormHasilCariMobil />
      <SectionHasilPencarianMobil />
    </div>
  );
};

export default PageHasilCari;
