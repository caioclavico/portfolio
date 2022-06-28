import {
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Progress,
} from "@chakra-ui/react";

export const Skills = () => (
    <Flex id="skills" direction="column" p={10} gap={12} pt="80px" w="100vw">
        <Heading
            textAlign="center"
            mb={10}
            pt={10}
            borderTop="1px solid"
            textTransform={"uppercase"}
        >
            Habilidades
        </Heading>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            justifyItems="center"
            data-aos="fade-right"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src="https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo html"
                    maxW="50%"
                    h="auto"
                />
                <Image
                    src="https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo css"
                    maxW="50%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>HTML e CSS</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%">
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={90}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            sx={{ direction: "rtl" }}
            justifyItems="center"
            data-aos="fade-left"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
            >
                <Image
                    src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
                    alt="logo javacript"
                    maxW="50%"
                    h="auto"
                />
                <Image
                    src="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
                    alt="logo typescript"
                    maxW="50%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>JavaScript e TypeScript</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%" sx={{ direction: "ltr" }}>
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={75}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            justifyItems="center"
            data-aos="fade-right"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo react"
                    maxW="100%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>React JS</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%">
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={70}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            sx={{ direction: "rtl" }}
            justifyItems="center"
            data-aos="fade-left"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
            >
                <Image
                    src="https://icongr.am/devicon/python-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo python"
                    maxW="100%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>Python</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%" sx={{ direction: "ltr" }}>
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={60}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            justifyItems="center"
            data-aos="fade-right"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
                    alt="logo node.js"
                    maxW="100%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>Node.JS</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%">
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={80}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
        <Grid
            h="200px"
            w="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            sx={{ direction: "rtl" }}
            justifyItems="center"
            data-aos="fade-left"
        >
            <GridItem
                rowSpan={4}
                colSpan={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
            >
                <Image
                    src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo postgreSQL"
                    maxW="50%"
                    h="auto"
                />
                <Image
                    src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor"
                    alt="logo mongoDB"
                    maxW="50%"
                    h="auto"
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading>PostgreSQL e MongoDB</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3} w="100%">
                <HStack spacing={4} h="100%" sx={{ direction: "ltr" }}>
                    <Heading size="lg">Nivel:</Heading>
                    <Progress
                        hasStripe
                        colorScheme="teal"
                        borderRadius={2}
                        value={70}
                        w="100%"
                    />
                </HStack>
            </GridItem>
        </Grid>
    </Flex>
);
