import { Layout } from "../../components/Layout";
import { About } from "../../components/Sections/About";
import { Intro } from "../../components/Sections/Intro";
import { Projects } from "../../components/Sections/Projects/index";
import { Skills } from "../../components/Sections/Skills";

export const Home = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Skills />
            <Projects />
        </Layout>
    );
};
