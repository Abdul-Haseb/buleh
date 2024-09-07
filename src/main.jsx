import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import { Theme } from "./components/customTheme/Theme.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <Header />
      <App />
      <ContactUs />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
