import {
    ButtonGroup,
    Container,
    IconButton,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
    <Container as="footer" role="contentinfo" py={{ base: "2", md: "4" }}>
        <Stack justify="space-between" direction="row" align="center">
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Developed by{" "}
                <Text as="span" color="teal.400">
                    {" "}
                    Caio Clavico
                </Text>
            </Text>
            <ButtonGroup variant="ghost">
                <IconButton
                    as="a"
                    href="https://linkedin.com/in/caioclavico"
                    target="_blank"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                />
                <IconButton
                    as="a"
                    href="https://github.com/caioclavico"
                    target="_blank"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                    as="a"
                    href="https://twitter.com/caioclavico"
                    target="_blank"
                    aria-label="Twitter"
                    icon={<FaTwitter fontSize="1.25rem" />}
                />
            </ButtonGroup>
        </Stack>
    </Container>
);
