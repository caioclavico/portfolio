import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavBarContainerProps {
    children: ReactNode;
    props?: FlexProps;
}

export const NavBarContainer = ({
    children,
    ...props
}: NavBarContainerProps) => {
    const bg = useColorModeValue(
        "rgb(79, 209, 197, 0.8)",
        "rgb(26, 32, 44, 0.8)"
    );

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={[4, 6, 6, 6]}
            bgColor={bg}
            color={["white", "white", "grey.700", "grey.700"]}
            boxShadow="0 0 1em black"
            position="fixed"
            top="0px"
            zIndex={2}
            {...props}
        >
            {children}
        </Flex>
    );
};
