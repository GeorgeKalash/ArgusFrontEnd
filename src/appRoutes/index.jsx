import { Routes, Route } from "react-router-dom";

import { PrivateRoutes } from "./privateRoutes";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Test from "../pages/login/test";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>  
      <Route path="/login" element={<Login />} />
      <Route path="/login/test/" element={<Test/>} />
    </Routes>
  );
};

export default AppRoutes;
