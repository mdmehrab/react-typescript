import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n.ts";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./features/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <App />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
