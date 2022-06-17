import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export const ScrollIndicator = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        let windowHeight = window.screen.height;
        let documentHeight = document.body.clientHeight;
        let scrollHeight =
            (pageYOffset / (documentHeight - windowHeight)) * 100;
        setPercentage(scrollHeight);
        console.log(documentHeight);
    }, [pageYOffset]);
    return (
        <Box
            w={`${percentage}vw`}
            h="10px"
            bgColor="teal.400"
            position="fixed"
            top={0}
            left={0}
            zIndex={3}
        ></Box>
    );
};
