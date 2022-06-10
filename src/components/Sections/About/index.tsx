import {
    Flex,
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

export const About = () => {
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
        <Flex id="about" alignItems="center" h="500px">
            <Grid
                w={"35%"}
                h="100%"
                alignItems="center"
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
            >
                <Image
                    src={EuPerfil}
                    alt="illustration man working"
                    boxSize="250px"
                    objectFit="cover"
                    position={"relative"}
                    borderRadius="50%"
                    border="solid 3px white"
                    left="50%"
                />
            </Grid>
            <Grid
                w={"65%"}
                h="100%"
                p={"0px 150px"}
                alignContent="center"
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
            >
                <Heading as={"h1"} pb={"10px"}>
                    Sobre Mim
                </Heading>
                <Text>
                    Meu nome é Caio Henrique Clavico Crizanto e sou apaixonado
                    por tecnologia. Meu primeiro contato com a programação
                    iniciou na faculdade de engenharia em 2012. Apesar de ter
                    gostado da área, só comecei a dar o devido foco em 2021,
                    quando conheci a Kenzie Academy e iniciei meus estudos com
                    desemvolvimento web. <br />
                    Hoje trabalho com tecnologias voltadas para back-end e
                    front-end
                </Text>
                <Flex justifyContent="center" gap="50px" mt="50px">
                    <Link
                        href="https://github.com/caioclavico"
                        isExternal
                        animation={`${animatedborder} 2s ease alternate infinite`}
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
                        animation={`${animatedborder} 2s ease alternate infinite`}
                        borderRadius="10px"
                        p="3px"
                        _hover={{ textDecoration: "none" }}
                        sx={{
                            textDecoration: "none",
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
                            <AiFillLinkedin />
                            Linkedin
                        </Text>
                    </Link>
                </Flex>
            </Grid>
        </Flex>
    );
};
