import { ScrollDown } from "../../components/ScrollDown";
import { Layout } from "../../components/Layout";
import { About } from "../../components/Sections/About";
import { Intro } from "../../components/Sections/Intro";
import { Projects } from "../../components/Sections/Projects/index";
import { Skills } from "../../components/Sections/Skills";
import { ScrollIndicator } from "../../components/ScrollIndicator";

export const Home = () => {
    return (
        <Layout>
            <ScrollIndicator />
            <ScrollDown />
            <Intro />
            <About />
            <Skills />
            <Projects />
        </Layout>
    );
};
