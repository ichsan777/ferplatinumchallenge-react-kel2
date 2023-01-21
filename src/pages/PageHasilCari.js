import React from "react";
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionFormHasilCariMobil from "../components/SectionFormHasilCariMobil";
import SectionHasilPencarianMobil from "../components/SectionHasilPencarianMobil";

const PageHasilCari = () => {
  return (
    <div className="pageHasilCari">
      <SectionPageTitle />
      <SectionFormHasilCariMobil />
      <SectionHasilPencarianMobil />
    </div>
  );
};

export default PageHasilCari;
