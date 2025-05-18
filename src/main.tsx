import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { I18nProvider } from "./locales/i18n-provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
  <I18nProvider>
    <App />
  </I18nProvider>
  // </BrowserRouter>
);
