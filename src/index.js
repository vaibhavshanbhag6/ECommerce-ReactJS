import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterProvider } from "./context/filtercontext";
import { CartProvider } from "./context/cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const domain = process.env.REACT_APP_DOMAIN_KEY;
const clientID = process.env.REACT_APP_CLIENT_KEY;

root.render(
    <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}>
<AppProvider>
<FilterProvider>
<CartProvider>
    <App />
</CartProvider>
</FilterProvider>
</AppProvider>
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
