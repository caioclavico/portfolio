import {
    Flex,
    Heading,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-scroll";
import "./index.css";

export const Header = () => {
    const bg = useColorModeValue(
        "rgb(79, 209, 197, 0.8)",
        "rgb(26, 32, 44, 0.8)"
    );
    const logoColor = useColorModeValue("white", "#38B2AC");

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            px="50px"
            py="10px"
            bgColor={bg}
            position="fixed"
            top="0px"
            zIndex={2}
            boxShadow="0 4px 14px 0 rgba(0, 0, 0, 0.15)"
        >
            <Flex w="100%" justify="space-between">
                <Heading color={logoColor} letterSpacing="widest">
                    {"<cc/>"}
                </Heading>

                <List
                    display="flex"
                    gap={8}
                    alignItems="center"
                    fontSize="2xl"
                    color="white"
                >
                    <ListItem className="nav-item">
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
                    </ListItem>
                    <ListItem className="nav-item">
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
                    </ListItem>
                    <ListItem className="nav-item">
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
                    </ListItem>
                    <ListItem className="nav-item">
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
                    </ListItem>
                    <ListItem>
                        <ColorModeSwitcher position="relative" left="20%" />
                    </ListItem>
                </List>
            </Flex>
        </Flex>
    );
};
