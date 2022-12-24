import { createBrowserRouter } from "react-router-dom";
import SectionAbout from "../components/SectionAbout";
import SectionWhyUs from "../components/SectionWhyUs";
import SectionTestimonial from "../components/SectionTestimonial";
import SectionHeroBanner from "../components/SectionHeroBanner";
import SectionCallToAction from "../components/SectionCallToAction";
import SectionFrequentlyAskedQuestion from "../components/SectionFrequentlyAskedQuestion";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil";
import SectionPageTitle from "../components/SectionPageTitle";
import SectionFormHasilCariMobil from "../components/SectionFormHasilCariMobil";
import SectionHasilPencarianMobil from "../components/SectionHasilPencarianMobil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: [<SectionHeroBanner />, <SectionAbout />, <SectionWhyUs />, <SectionTestimonial />, <SectionCallToAction />, <SectionFrequentlyAskedQuestion />],
  },
  {
    path: "/carimobil",
    element: [<SectionHeroBannerCariMobil />, <SectionFormCariMobil />],
  },
  {
    path: "/hasilcari",
    element: [<SectionPageTitle />, <SectionFormHasilCariMobil />, <SectionHasilPencarianMobil />],
  },
]);
