import { Box, Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import "./index.css";

interface MenuLinksProps {
    isOpen: boolean;
}
export const MenuLinks = ({ isOpen }: MenuLinksProps) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                fontSize={["xl", "xl", "2xl", "2xl"]}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <Box className="nav-item">
                    <Link
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                </Box>
                <Box className="nav-item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Sobre
                    </Link>
                </Box>
                <Box className="nav-item">
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Habilidades
                    </Link>
                </Box>
                <Box className="nav-item">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Projetos
                    </Link>
                </Box>
                <Box>
                    <ColorModeSwitcher />
                </Box>
            </Stack>
        </Box>
    );
};
