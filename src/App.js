import { RouterProvider } from "react-router-dom";
import { router } from "./config/Router";
import NormalHeader from "./components/Header";
import NormalFooter from "./components/Footer";

function App() {
  return (
    <div>
      <NormalHeader />
      <RouterProvider router={router} />
      <NormalFooter />
    </div>
  );
}

export default App;
