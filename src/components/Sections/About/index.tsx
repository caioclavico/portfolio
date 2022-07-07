import {
    Flex,
    FlexProps,
    Grid,
    Heading,
    Image,
    keyframes,
    Link,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import EuPerfil from "../../../assets/eu.jpeg";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Tilt from "react-parallax-tilt";

type AboutProps = Omit<FlexProps, "aria-label">;

export const About: React.FC<AboutProps> = (props) => {
    const animatedborder = keyframes`
    0% {
		background-position: 5% 50%;
	}
	50% {
		background-position: 95% 50%;
	}
	100% {
		background-position: 5% 50%;
	}
            `;
    return (
        <Flex
            id="about"
            alignItems="center"
            h={["auto", "auto", "100vh", "100vh"]}
            p={"50px 0px"}
            flexDirection={["column", "column", "row", "row"]}
            {...props}
        >
            <Grid
                w={["50%", "50%", "35%", "35%"]}
                h="100%"
                alignItems="center"
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                justifyContent={["center", "center", "flex-end", "flex-end"]}
            >
                <Tilt
                    style={{
                        maxWidth: "250px",
                    }}
                >
                    <Image
                        src={EuPerfil}
                        alt="illustration man working"
                        objectFit="cover"
                        borderRadius="50%"
                        border="solid 3px white"
                        m={0}
                    />
                </Tilt>
            </Grid>
            <Grid
                w={["100%", "100%", "65%", "65%"]}
                h="100%"
                px={["50px", "50px", "100px", "150px"]}
                py={["50px", "50px"]}
                textAlign={["center", "center", "justify", "justify"]}
                alignContent="center"
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
            >
                <Heading as={"h1"} pb={"10px"}>
                    Sobre Mim
                </Heading>
                <Text>
                    Sou apaixonado por tecnologia e engenharia, amante em
                    resolver problemas e desafios, meu primeiro contato com a
                    programação iniciou na faculdade de engenharia em 2012.
                    Apesar de ter gostado da área, só comecei a dar o devido
                    foco em 2021, quando iniciei meus estudos com
                    desemvolvimento web. <br />
                    Hoje trabalho com tecnologias voltadas para back-end e
                    front-end.
                </Text>
                <Flex
                    justifyContent="center"
                    gap="50px"
                    mt="50px"
                    wrap={"wrap"}
                >
                    <Link
                        href="https://github.com/caioclavico"
                        isExternal
                        animation={`${animatedborder} 5s ease alternate infinite`}
                        borderRadius="10px"
                        p="3px"
                        _hover={{ textDecoration: "none" }}
                        sx={{
                            backgroundSize: "400% 400%",
                            backgroundOrigin: "content-box",
                            backgroundImage:
                                "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
                        }}
                    >
                        <Text
                            as="span"
                            display="flex"
                            alignItems="center"
                            gap="5px"
                            background={useColorModeValue("white", "teal.200")}
                            color={useColorModeValue("gray.700", "white")}
                            p="1rem 3rem"
                            borderRadius="5px"
                            fontWeight="bold"
                            _hover={{
                                background: "transparent",
                            }}
                        >
                            <AiFillGithub />
                            GitHub
                        </Text>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/caioclavico"
                        isExternal
                        animation={`${animatedborder} 5s ease alternate infinite`}
                        borderRadius="10px"
                        p="3px"
                        _hover={{ textDecoration: "none" }}
                        sx={{
                            textDecoration: "none",
                            backgroundSize: "400% 400%",
                            backgroundOrigin: "content-box",
                            backgroundImage:
                                "linear-gradient(-60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
                        }}
                    >
                        <Text
                            as="span"
                            display="flex"
                            alignItems="center"
                            gap="5px"
                            background={useColorModeValue("white", "teal.200")}
                            color={useColorModeValue("gray.700", "white")}
                            p="1rem 3rem"
                            borderRadius="5px"
                            fontWeight="bold"
                            _hover={{
                                background: "transparent",
                            }}
                        >
                            <AiFillLinkedin />
                            Linkedin
                        </Text>
                    </Link>
                </Flex>
            </Grid>
        </Flex>
    );
};
