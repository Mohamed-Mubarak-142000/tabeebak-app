// src/layouts/PrivateLayout.tsx
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAuth } from "./context/use-auth";
import { Stack } from "@mui/material";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <Stack sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};

export default PrivateLayout;
