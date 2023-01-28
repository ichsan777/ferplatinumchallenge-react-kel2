import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import SectionHeroBannerCariMobil from "../components/SectionHeroBannerCariMobil";
import SectionFormCariMobil from "../components/SectionFormCariMobil";
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionDetailMobil from "../components/SectionDetailMobil";
import SectionFormDetailMobil from "../components/SectionFormDetailMobil";
import PageHasilCari from "../pages/PageHasilCari";
import PageHome from "../pages/PageHome";
import PageDetailMobil from "../pages/PageDetailMobil";

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
    element: <RenderLayout children={[<PageDetailMobil />]} />,
  },
]);
