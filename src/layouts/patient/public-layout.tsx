// src/layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { Stack } from "@mui/material";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Stack
        spacing={{ xs: 5, md: 10, lg: 15 }}
        sx={{
          minHeight: "100vh",
          py: { xs: 5, md: 10 },
          px: { xs: 2, md: 5 },
          width: { xs: "100%", md: "80%" },
          mx: "auto",
        }}
      >
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};

export default PublicLayout;
