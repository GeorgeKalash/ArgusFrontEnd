import { Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoutes } from "./privateRoutes";
import Login from "@/pages/login";
import Home from "@/pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
