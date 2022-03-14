import React from "react";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Outlet } from "react-router-dom";

export default () => (
  <>
    <DashboardNavbar />
    <Outlet />
  </>
);
