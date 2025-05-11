// src/App.tsx
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import DoctorsPage from "./pages/doctors-page";
import ContactUsPage from "./pages/contact-us-page";
import LoginPage from "./pages/login-page";
import ProfilePage from "./pages/profile-page";
import RegisterPage from "./pages/register-page";
import NotFoundPage from "./pages/not-found-page";
import AppointmentsPage from "./pages/appointments-page";
import AppointmentPage from "./pages/appointment-page";
import { usePathname } from "./hooks";
import { LocalizationProvider } from "./locales";
import { CssBaseline } from "@mui/material";
import PublicLayout from "./layouts/patient/public-layout";
import AuthLayout from "./layouts/patient/auth-layout";
import PrivateLayout from "./layouts/patient/private-layout";
import { AuthProvider } from "./layouts/patient/context/auth-context";
import { themeConfig, ThemeProvider } from "./theme";
import { defaultSettings, SettingsProvider } from "./components/settings";

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useScrollToTop();

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key?.startsWith("oidc.")) {
        window.location.reload();
      }
    };

    window.addEventListener("storage", handleStorageEvent);
    return () => window.removeEventListener("storage", handleStorageEvent);
  }, []);

  return (
    <SettingsProvider defaultSettings={defaultSettings}>
      <LocalizationProvider>
        <AuthProvider>
          <CssBaseline />
          <ThemeProvider
            noSsr
            defaultMode={themeConfig.defaultMode}
            modeStorageKey={themeConfig.modeStorageKey}
          >
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/doctors/:specialty" element={<DoctorsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
              </Route>

              {/* Authentication Routes (for non-authenticated users) */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>

              {/* Private Routes (for authenticated users) */}
              <Route element={<PrivateLayout />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route
                  path="/appointment/:docId"
                  element={<AppointmentPage />}
                />
              </Route>

              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </SettingsProvider>
  );
}

export default App;
