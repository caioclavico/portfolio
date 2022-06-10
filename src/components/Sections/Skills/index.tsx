import { Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

export const Skills = () => (
    <Flex
        id="skills"
        alignItems="center"
        w="100%"
        h="700px"
        bgColor="gray.400"
        direction="column"
    >
        <Heading m="50px">Algumas Tecnologias que me aventuro</Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%" m="150px">
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/python-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
            <GridItem
                w="100%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                <Image src="https://icongr.am/devicon/git-original-wordmark.svg?size=128&color=currentColor" />
            </GridItem>
        </Grid>
    </Flex>
);
