import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
