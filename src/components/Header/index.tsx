import { Flex, FlexProps, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { MenuLinks } from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";
import { NavBarContainer } from "./NavBarContainer";

export const Header = (props: FlexProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logoColor = useColorModeValue("white", "#38B2AC");

    return (
        <NavBarContainer {...props}>
            <Flex gap={[4, 4, 8, 8]} alignItems="center">
                <Heading color={logoColor} letterSpacing="widest">
                    {"<cc/>"}
                </Heading>
            </Flex>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};
