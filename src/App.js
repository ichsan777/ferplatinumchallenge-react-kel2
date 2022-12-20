import NormalHeader from "./components/Header";
import SectionHeroBanner from "./components/SectionHeroBanner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionAbout from "./components/SectionAbout";
import SectionWhyUs from "./components/SectionWhyUs";
import SectionTestimonial from "./components/SectionTestimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<NormalHeader />, <SectionHeroBanner />, <SectionAbout />, <SectionWhyUs />, <SectionTestimonial />],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
