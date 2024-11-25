import { Routes as Routess, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
export default function Routes() {
  return (
    <>
      <Routess>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routess>
    </>
  );
}
