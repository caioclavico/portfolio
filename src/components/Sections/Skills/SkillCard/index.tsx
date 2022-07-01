import { Box, BoxProps, Image, Text } from "@chakra-ui/react";

interface SkillProps extends BoxProps {
    name: string;
    img: string;
}

export const SkillCard = (props: SkillProps) => {
    return (
        <Box
            textAlign="center"
            _hover={{ transform: "translateY(-7px)" }}
            transition="ease 0s, transform 0.2s"
            margin={8}
            {...props}
        >
            <Image src={props.img} alt={props.name} />
            <Text m={4}>{props.name}</Text>
        </Box>
    );
};
