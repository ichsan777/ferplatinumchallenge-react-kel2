import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import SectionAbout from "../Sections/SectionAbout";
import SectionWhyUs from "../Sections/SectionWhyUs";
import SectionTestimonial from "../components/SectionTestimonial";
import SectionHeroBanner from "../Sections/SectionHeroBanner";
import SectionCallToAction from "../components/SectionCallToAction";
import SectionFrequentlyAskedQuestion from "../components/SectionFrequentlyAskedQuestion";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil";
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionDetailMobil from "../components/SectionDetailMobil";
import SectionFormDetailMobil from "../components/SectionFormDetailMobil";
import PageHasilCari from "../pages/PageHasilCari";
import PageHome from "../pages/PageHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<PageHome />]} />,
  },
  {
    path: "/carimobil",
    element: <RenderLayout children={[<SectionHeroBannerCariMobil />, <SectionFormCariMobil />]} />,
  },
  {
    path: "/hasilcari",
    element: <RenderLayout children={<PageHasilCari />} />,
  },
  {
    path: "/detailmobil",
    element: <RenderLayout children={[<SectionPageTitle />, <SectionFormDetailMobil />, <SectionDetailMobil />]} />,
  },
]);
