import { Flex, Grid, GridItem } from "@chakra-ui/react";

export const Projects = () => (
    <Flex
        id="projects"
        alignItems="center"
        w="100%"
        h="700px"
        bgColor="gray.400"
    >
        <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%" m="150px">
            <GridItem w="100%" h="100px" bg="blue.500" />
            <GridItem w="100%" h="100px" bg="blue.500" />
            <GridItem w="100%" h="100px" bg="blue.500" />
            <GridItem w="100%" h="100px" bg="blue.500" />
            <GridItem w="100%" h="100px" bg="blue.500" />
        </Grid>
    </Flex>
);
