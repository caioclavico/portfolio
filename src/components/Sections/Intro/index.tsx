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

export const Intro = () => {
    const bg = useColorModeValue(
        "Linear(to-r, teal.100 65%, white 35%)",
        "Linear(to-r, gray.700 65%, white 35%)"
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
        <Flex id="intro" alignItems="center" bgGradient={bg}>
            <Grid
                w={"65%"}
                animation={animationSlide("left")}
                position="relative"
            >
                <Heading as={"h1"} m={"150px"} color={fontColor}>
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
            >
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
