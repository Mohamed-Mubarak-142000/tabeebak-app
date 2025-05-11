// src/layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { Stack } from "@mui/material";

const PublicLayout = () => {
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

export default PublicLayout;
