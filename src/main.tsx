import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppRoutes from "./routes/AppRoutes";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </Provider>
);
