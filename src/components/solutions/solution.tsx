import Carousel from "react-multi-carousel"
import { RenderSolutions } from "./data"
import "react-multi-carousel/lib/styles.css";
import Lines from "../../assets/imgs/solutions/lines.png"
import { StyledContainer } from "../../styles/styledComponents/styledComponents";

export default function Solutions() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const handleMouseOver = (id: number) => {
        const top = document.getElementById(id + "-top")
        const bottom = document.getElementById(id + "-bottom")

        if (top && bottom) {
            top.style.transform = "translateY(130px)"
            bottom.style.transform = "translateY(-130px)"
        }
    }

    const handleMouseOut = (id: number) => {
        const top = document.getElementById(id + "-top")
        const bottom = document.getElementById(id + "-bottom")

        if (top && bottom) {
            top.style.transform = "translateY(0)"
            bottom.style.transform = "translateY(0)"
        }
    }

    return (
        <StyledContainer id="solutions">
            <img src={Lines} alt="" className="w-[100%] h-[100%] absolute top-0 left-0 opacity-30" />
            <div className="flex flex-col items-center justify-center">
                <div style={{ marginBottom: 10 }} className="text-[1.7rem] tracking-tight lg:text-[2.6rem] font-bold text-center">Prepare-se para o <span className=" text-[#0096FB]">sucesso</span> digital!</div>
                <div className="lg:w-[650px] text-center"> Com a Globalsys, voc  ter  tudo o que precisa para construir um futuro brilhante para sua empresa.
                    <span className="font-bold text-[#0096FB]"> Inova o Digital Segura da Gnexum </span>
                </div>
            </div>

            <Carousel
                responsive={responsive}
                containerClass="w-[95vw] sm:w-[90vw] xl:w-[90vw] 2xl:w-[70vw]"
                className="cursor-grab"
            >
                {RenderSolutions.map((item) => (
                    <div style={{ padding: 30 }}>
                        <div
                            key={item.id}
                            style={{
                                userSelect: "none",
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="relative overflow-hidden h-[380px] w-[100%] lg:h-[600px] sm:w-[380px] lg:w-[330px] 2xl:w-[340px] flex-shrink-0 rounded-[30px] flex justify-center items-center grayscale-[100%] hover:grayscale-[0%] transition-all duration-300 "
                            onMouseOver={() => handleMouseOver(item.id)}
                            onMouseOut={() => handleMouseOut(item.id)}
                        >
                            <div id={`${item.id}-top`} className="absolute top-[-130px] right-[30px] w-[400px] h-[200px] bg-[#ffffff5c] rotate-160 transition-all duration-500" />
                            <div id={`${item.id}-bottom`} className="absolute bottom-[-130px] left-[30px] w-[400px] h-[200px] bg-[#ffffff5c] rotate-160 transition-all duration-500" />
                            <div className="text-center text-white font-bold text-2xl">{item.title}</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </StyledContainer>

    )
}