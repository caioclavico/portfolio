import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <Flex direction="column" align="center" m="0 auto" overflowX="hidden">
        <Header />
        {children}
        <Footer />
    </Flex>
);
