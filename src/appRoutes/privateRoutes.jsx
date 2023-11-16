import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { Layout } from "@/components";

export const PrivateRoutes = () => {
  return <Layout>{true ? <Outlet /> : <Navigate to="/login" />}</Layout>;
};
