import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import PageHasilCari from "../pages/PageHasilCari";
import PageHome from "../pages/PageHome";
import PageCariMobil from "../pages/PageCariMobil";
import PageDetailMobil from "../pages/PageDetailMobil";
import PageSignIn from "../pages/PageSignIn";
import PageSignUp from "../pages/PageSignUp";
import PagePembayaran from "../components/pembayaran/index";
import { PublicRoute, PrivateRoute } from "./RouteHandler";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<RenderLayout children={<PageHome />} />} />
      <Route exact path="/carimobil" element={<RenderLayout children={<PageCariMobil />} />} />
      <Route exact path="/hasilcari" element={<RenderLayout children={<PageHasilCari />} />} />
      <Route exact path="/detailmobil" element={<RenderLayout children={<PageDetailMobil />} />} />
      <Route exact path="/signin" element={<PageSignIn />} />
      <Route exact path="/signup" element={<PageSignUp />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/pembayaran" element={<RenderLayout Children={<PagePembayaran />} />} />
      </Route>
    </>
  )
);
