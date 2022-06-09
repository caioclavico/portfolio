import { Routes as Switch, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";

export const Routes = () => (
    <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
    </Switch>
);
