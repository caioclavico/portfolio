import {
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Illustration from "../../assets/illustration.svg";

export const Home = () => {
    const bg = useColorModeValue(
        "Linear(to-r, teal.100 65%, white 35%)",
        "Linear(to-r, gray.700 65%, white 35%)"
    );

    return (
        <Flex h={"100vh"} alignItems="center" bgGradient={bg}>
            <Grid w={"65%"}>
                <Heading as={"h1"} m={"150px"}>
                    Olá, Eu sou
                    <br />{" "}
                    <Text as={"span"} color="teal.400" fontSize={"6xl"}>
                        Caio Clavico
                    </Text>{" "}
                    <br />
                    Desenvolvedor Full-Stack
                </Heading>
            </Grid>
            <Grid w={"35%"}>
                <Image
                    src={Illustration}
                    alt="illustration man working"
                    boxSize="700px"
                    position={"relative"}
                    right="50%"
                />
            </Grid>
        </Flex>
    );
};
