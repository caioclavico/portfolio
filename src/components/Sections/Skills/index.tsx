import { Flex, Heading, HStack } from "@chakra-ui/react";
import { skills } from "../../../utils/skills";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
    return (
        <Flex
            id="skills"
            direction="column"
            gap={12}
            w="100vw"
            borderTop="1px solid"
            py={12}
        >
            <Heading textAlign="center">Minhas Skills</Heading>
            <HStack justifyContent="center" flexWrap="wrap" shouldWrapChildren>
                {skills.map((skill, i) => (
                    <SkillCard key={i} img={skill.img} name={skill.name} />
                ))}
            </HStack>
        </Flex>
    );
};
