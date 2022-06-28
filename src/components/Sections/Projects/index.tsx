import {
    Box,
    Heading,
    Icon,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import "./index.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Projects = () => {
    const slides = [
        {
            title: "Torneio tribruxo",
            subtitle: "JavaScript",
            description: "Utilizanto a API do Harry Potter",
            image: "https://i.ibb.co/54GLTy4/harry-poter-icon-transparent.png",
        },
        {
            title: "Hamburgueria 2.0",
            subtitle: "React/TypeScript",
            description: "Marketplace de uma hamburgueria",
            image: "https://i.ibb.co/w7Hm2XP/hamburguer.webp",
        },
        {
            title: "Kenzie Hub",
            subtitle: "React",
            description: "Utilizando Material UI",
            image: "https://i.ibb.co/CKGPXQ0/kenzie-Hub2.png",
        },
        {
            title: "Kenzie Shop",
            subtitle: "React",
            description: "Marketplace",
            image: "https://i.ibb.co/74vwwH7/marketplace.png",
        },
        {
            title: "Oil Cycle",
            subtitle: "React/TypeScript",
            description: "Projeto realizado em grupo",
            image: "https://i.ibb.co/s9rpvRK/Oil-Cycle-logo.png",
        },
    ];

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
            render();
        }
    }

    function flowLeft() {
        if (_albums.length > _index + 1) {
            _index++;
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
        <Box
            id="projects"
            width="100%"
            height="100vh"
            textAlign="center"
            position="relative"
            bgColor={bg}
            pt="60px"
        >
            <Heading mt={8} color={fontColor}>
                PROJETOS
            </Heading>
            <div id="coverflow">
                {slides.map((slide, i) => (
                    <Box
                        key={i}
                        as="section"
                        data-cover={slide.image}
                        color="white"
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
        </Box>
    );
};
