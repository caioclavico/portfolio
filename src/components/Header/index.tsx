import {
    Flex,
    Heading,
    HStack,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Header = () => {
    const bg = useColorModeValue("teal.300", "gray.800");
    const logoColor = useColorModeValue("white", "teal.400");

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
        >
            <Flex w="100%" justify="space-between">
                <Heading color={logoColor} letterSpacing="widest">
                    {"<cc/>"}
                </Heading>
                <HStack spacing={8} fontSize="2xl" marginRight="80px">
                    <Link>Home</Link>
                    <Link>Sobre</Link>
                    <Link>Projetos</Link>
                    <Link>Contato</Link>
                    <ColorModeSwitcher position="relative" left="20%" />
                </HStack>
            </Flex>
        </Flex>
    );
};
