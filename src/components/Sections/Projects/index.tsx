import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./index.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { projects } from "../../../utils/projects";

export const Projects = () => {
    // Local variables
    let _index = 0,
        _prevLink: Element | null = null,
        _nextLink: Element | null = null,
        _albums: Array<HTMLElement> = [];
    // Constants
    const OFFSET = 70; // pixels
    const ROTATION = 45; // degrees
    const BASE_ZINDEX = 10;
    const MAX_ZINDEX = 42;

    const [index, setIndex] = useState(Math.floor(projects.length / 2));

    function get(selector: string): Element | null {
        return document.querySelector(selector);
    }

    function render() {
        for (var i = 0; i < _albums.length; i++) {
            if (i < _index) {
                _albums[i].style.transform =
                    "translateX( -" +
                    OFFSET * (_index - i) +
                    "% ) rotateY( " +
                    ROTATION +
                    "deg )";
                _albums[i].style.zIndex = (BASE_ZINDEX + i).toString();

                _albums[i].classList.remove("slide_active");
            }

            if (i === _index) {
                _albums[i].style.transform =
                    "rotateY( 0deg ) translateZ( 140px )";
                _albums[i].style.zIndex = MAX_ZINDEX.toString();

                _albums[i].classList.add("slide_active");
            }

            if (i > _index) {
                _albums[i].style.transform =
                    "translateX( " +
                    OFFSET * (i - _index) +
                    "% ) rotateY( -" +
                    ROTATION +
                    "deg )";
                _albums[i].style.zIndex = (
                    BASE_ZINDEX +
                    (_albums.length - i)
                ).toString();

                _albums[i].classList.remove("slide_active");
            }
        }
    }

    function flowRight() {
        if (_index) {
            _index--;
            setIndex(_index);
            render();
        }
    }

    function flowLeft() {
        if (_albums.length > _index + 1) {
            _index++;
            setIndex(_index);
            render();
        }
    }

    function keyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 37:
                flowRight();
                break;
            case 39:
                flowLeft();
                break;
        }
    }

    function registerEvents() {
        _prevLink?.addEventListener("click", flowRight, false);
        _nextLink?.addEventListener("click", flowLeft, false);
        document.addEventListener("keydown", keyDown, false);
    }

    function init() {
        _albums = Array.prototype.slice.call(
            document.querySelectorAll("section")
        );
        _index = Math.floor(_albums.length / 2);

        _prevLink = get("#prev");
        _nextLink = get("#next");

        for (var i = 0; i < _albums.length; i++) {
            var url = _albums[i].getAttribute("data-cover");
            _albums[i].style.backgroundImage = "url(" + url + ")";
        }

        registerEvents();
        render();
    }

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const bg = useColorModeValue("teal.100", "gray.700");
    const fontColor = useColorModeValue("gray.500", "white");

    return (
        <Flex
            id="projects"
            width="100%"
            h={["auto", "auto", "100vh", "100vh"]}
            direction={"column"}
            justifyContent="center"
            textAlign="center"
            position="relative"
            bgColor={bg}
            pt={16}
            color={fontColor}
        >
            <Heading mt={4}>Meus Projetos</Heading>
            <div id="coverflow">
                {projects.map((slide, i) => (
                    <Box
                        key={i}
                        as="section"
                        data-cover={slide.image}
                        color="white"
                        onClick={() => window.open(slide.git, "_blank")}
                    >
                        <Box className="slideContentInner" display="none">
                            <h2 className="slideTitle">{slide.title}</h2>
                            <h3 className="slideSubtitle">{slide.subtitle}</h3>
                            {/* <p className="slideDescription">
                                {slide.description}
                            </p> */}
                        </Box>
                    </Box>
                ))}
            </div>

            <nav id="controls">
                <IconButton
                    id="prev"
                    size="50px"
                    color="white"
                    bg={"transparent"}
                    aria-label="left"
                    icon={<Icon as={MdKeyboardArrowLeft} w={12} h={12} />}
                />
                <IconButton
                    id="next"
                    size="lg"
                    color="white"
                    bg={"transparent"}
                    aria-label="right"
                    icon={<Icon as={MdKeyboardArrowRight} w={12} h={12} />}
                />
            </nav>
            <Box bottom={4} mt={6} position="relative" w="100%" px={12}>
                <Heading>{projects[index].title}</Heading>
                <Text p={4}>{projects[index].description}</Text>
                <HStack w="100%" justifyContent="center">
                    <Button
                        leftIcon={<AiFillGithub />}
                        w="100px"
                        onClick={() =>
                            window.open(projects[index].git, "_blank")
                        }
                    >
                        Git
                    </Button>
                    {projects[index].view && (
                        <Button
                            leftIcon={<AiFillEye />}
                            w="100px"
                            onClick={() =>
                                window.open(projects[index].view, "_blank")
                            }
                        >
                            View
                        </Button>
                    )}
                </HStack>
            </Box>
        </Flex>
    );
};
