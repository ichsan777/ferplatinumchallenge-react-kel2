import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import PageHasilCari from "../pages/PageHasilCari";
import PageHome from "../pages/PageHome";
import PageCariMobil from "../pages/PageCariMobil";
import PageDetailMobil from "../pages/PageDetailMobil";
import PageSignIn from "../pages/PageSignIn";
import PageSignUp from "../pages/PageSignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<PageHome />]} />,
  },
  {
    path: "/carimobil",
    element: <RenderLayout children={[<PageCariMobil />]} />,
  },
  {
    path: "/hasilcari",
    element: <RenderLayout children={<PageHasilCari />} />,
  },
  {
    path: "/detailmobil",
    element: <RenderLayout children={[<PageDetailMobil />]} />,
  },
  {
    path: "/signin",
    element: <PageSignIn />,
  },
  {
    path: "/signup",
    element: <PageSignUp />,
  },
]);
