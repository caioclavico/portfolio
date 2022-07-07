import {
    Flex,
    Grid,
    Heading,
    Image,
    keyframes,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Illustration from "../../../assets/illustration.svg";

import Tilt from "react-parallax-tilt";

export const Intro = () => {
    const bgR = useColorModeValue(
        "Linear(to-r, teal.100 65%, white 35%)",
        "Linear(to-r, gray.700 65%, white 35%)"
    );

    const bgB = useColorModeValue(
        "Linear(to-b, teal.100 100%, white 35%)",
        "Linear(to-b, gray.700 100%, white 35%)"
    );

    const fontColor = useColorModeValue("gray.500", "white");

    const animationSlide = (position: string) => {
        const animationKeyframes = keyframes`
            0% { ${position}: -100% }
            100% { ${position}: 0% }
            `;

        return `${animationKeyframes} 2s ease-in-out`;
    };

    return (
        <Flex
            id="intro"
            alignItems="center"
            bgGradient={[bgB, bgB, bgR, bgR]}
            flexDirection={["column", "column", "row", "row"]}
            h={["auto", "auto", "100vh", "100vh"]}
            w="100%"
        >
            <Grid
                w={["100%", "100%", "65%", "65%"]}
                animation={animationSlide("left")}
                position="relative"
            >
                <Heading
                    as={"h1"}
                    mx={["20px", "50px", "100px", "150px"]}
                    my="150px"
                    color={fontColor}
                >
                    Olá, Eu sou
                    <br />{" "}
                    <Text as={"span"} color="teal.400" fontSize={"6xl"}>
                        Caio Clavico
                    </Text>{" "}
                    <br />
                    Desenvolvedor Full-Stack
                </Heading>
            </Grid>
            <Grid
                w={"35%"}
                animation={animationSlide("right")}
                position="relative"
                display={["none", "none", "grid", "grid"]}
            >
                <Tilt style={{ position: "relative", right: "50%" }}>
                    <Image
                        src={Illustration}
                        alt="illustration man working"
                        width="700px"
                    />
                </Tilt>
            </Grid>
        </Flex>
    );
};
