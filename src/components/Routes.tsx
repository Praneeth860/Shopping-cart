import { Routes as AppRoutes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Store from "../pages/Store";
// import About from "../pages/About";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Store = lazy(() => import("../pages/Store"));
const About = lazy(() => import("../pages/About"));
export default function Routes() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      >
        <AppRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </AppRoutes>
      </Suspense>
    </>
  );
}
