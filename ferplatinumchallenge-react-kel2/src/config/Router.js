import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import SectionAbout from "../components/SectionAbout";
import SectionWhyUs from "../components/SectionWhyUs";
import SectionTestimonial from "../components/SectionTestimonial";
import SectionHeroBanner from "../components/SectionHeroBanner";
import SectionCallToAction from "../components/SectionCallToAction";
import SectionFrequentlyAskedQuestion from "../components/SectionFrequentlyAskedQuestion";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil";
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionDetailMobil from "../components/SectionDetailMobil";
import SectionFormDetailMobil from "../components/SectionFormDetailMobil";
import PageHasilCari from "../pages/PageHasilCari";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<SectionHeroBanner />, <SectionAbout />, <SectionWhyUs />, <SectionTestimonial />, <SectionCallToAction />, <SectionFrequentlyAskedQuestion />]} />,
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
