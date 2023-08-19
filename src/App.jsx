import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Aboutpage from "./pages/about/Aboutpage";
import Contactpage from "./pages/contact/Contactpage";
import Homepage from "./pages/home/Homepage";
import Servicespage from "./pages/services/Servicespage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
      >
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path="/services"
          element={<Servicespage />}
        />
        <Route
          path="/about"
          element={<Aboutpage />}
        />
        <Route
          path="/contact"
          element={<Contactpage />}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default App;
