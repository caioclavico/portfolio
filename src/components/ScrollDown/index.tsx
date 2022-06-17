import { Box, BoxProps, Icon, keyframes, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import { useWindowScroll } from "react-use";

type ScrollDownProps = Omit<BoxProps, "aria-label">;

export const ScrollDown: React.FC<ScrollDownProps> = (props) => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (pageYOffset > window.screen.height / 3) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [pageYOffset]);
    if (!visible) {
        return null;
    }

    const animationKeyframes = keyframes`
            from {  transform: translateY(-5px) }
            to { transform: translateY(5px);}
            `;

    const animation = `${animationKeyframes} 1s alternate ease infinite`;
    return (
        <Box
            position="fixed"
            bottom={0}
            textAlign="center"
            color="gray.500"
            zIndex="1000"
            cursor="pointer"
            {...props}
        >
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <Text>Scrol Down</Text>
                <Icon
                    animation={animation}
                    as={MdKeyboardArrowDown}
                    w={8}
                    h={8}
                    position="relative"
                    bottom={2}
                />
            </Link>
        </Box>
    );
};
