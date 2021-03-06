import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AppProvider } from "./contexts";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <ColorModeScript initialColorMode="dark" />
                <App />
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
