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
            title: "Machu Picchu",
            subtitle: "Peru",
            description: "Adventure is never far away",
            image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
            title: "Chamonix",
            subtitle: "France",
            description: "Let your dreams come true",
            image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
            title: "Mimisa Rocks",
            subtitle: "Australia",
            description: "A piece of heaven",
            image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
            title: "Four",
            subtitle: "Australia",
            description: "A piece of heaven",
            image: "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
            title: "Five",
            subtitle: "Australia",
            description: "A piece of heaven",
            image: "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
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
                            <p className="slideDescription">
                                {slide.description}
                            </p>
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
