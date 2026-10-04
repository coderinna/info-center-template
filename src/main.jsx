import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker.js";
import "./components/Language/i18n.js";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/Language/i18n.js";
import ErrorBoundary from "./components/Errors/ErrorBoundary.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

async function bootstrap() {
  console.log("[APP] initializing Apollo...");


  console.log("[APP] Apollo ready → rendering app");

  root.render(
    <ErrorBoundary>
          <I18nextProvider i18n={i18n}>
            <HelmetProvider>
   <BrowserRouter> 
                <App />
   </BrowserRouter>
            </HelmetProvider>
          </I18nextProvider>
    </ErrorBoundary>
  );
}

bootstrap();

serviceWorker.unregister();