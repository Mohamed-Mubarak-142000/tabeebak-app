import { useEffect, Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "./locales";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./layouts/patient/context/auth-context";
import { themeConfig, ThemeProvider } from "./theme";
import { defaultSettings, SettingsProvider } from "./components/settings";
import { RouteLoading } from "./components/route-loading";

// Lazy load pages
const HomePage = lazy(() => import("./pages/home-page"));
const AboutPage = lazy(() => import("./pages/about-page"));
const DoctorsPage = lazy(() => import("./pages/doctors-page"));
const ContactUsPage = lazy(() => import("./pages/contact-us-page"));
const LoginPage = lazy(() => import("./pages/login-page"));
const ProfilePage = lazy(() => import("./pages/profile-page"));
const RegisterPage = lazy(() => import("./pages/register-page"));
const NotFoundPage = lazy(() => import("./pages/not-found-page"));
const AppointmentsPage = lazy(() => import("./pages/appointments-page"));
const AppointmentPage = lazy(() => import("./pages/appointment-page"));
const PublicLayout = lazy(() => import("./layouts/patient/public-layout"));
const AuthLayout = lazy(() => import("./layouts/patient/auth-layout"));
const PrivateLayout = lazy(() => import("./layouts/patient/private-layout"));

const router = createBrowserRouter([
  {
    element: <PublicLayout />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/doctors", element: <DoctorsPage /> },
      { path: "/doctors/:specialty", element: <DoctorsPage /> },
      { path: "/contact", element: <ContactUsPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      { path: "/profile", element: <ProfilePage /> },
      { path: "/appointments", element: <AppointmentsPage /> },
      { path: "/appointment/:docId", element: <AppointmentPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

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
            <Suspense fallback={<RouteLoading />}>
              <RouterProvider router={router} />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </SettingsProvider>
  );
}

export default App;
