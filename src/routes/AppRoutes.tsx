import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Quoter from "../components/Quoter/Quoter";
import Chequera from "../views/Chequera";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/manual" element={<Quoter />} />
      <Route path="/chequera" element={<Chequera />} />
    </Routes>
  );
};

export default AppRoutes;
