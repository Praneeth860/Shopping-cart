import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";

import { Suspense, lazy } from "react";
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
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </AppRoutes>
      </Suspense>
    </>
  );
}
