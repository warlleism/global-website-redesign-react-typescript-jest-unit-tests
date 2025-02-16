import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Lines from "../../assets/imgs/solutions/lines.png"
import { StyledContainer, StyledLink, StyledProduct } from "../../styles/styledComponents/styledComponents";
import { IoIosArrowForward } from "react-icons/io";
import { ProductsRender } from "./data";
import { useState } from "react";

export default function Produtcs() {

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
    const [currentItem, setCurrentItem] = useState(1);

    const handleBeforeChange = (nextSlide: number) => {
        setCurrentItem(nextSlide + 1);
    };

    console.log(currentItem)
    return (
        <StyledContainer id="solutions">
            <img src={Lines} alt="" className="w-[100%] h-[100%] absolute top-0 left-0 opacity-30" />
            <div className="flex flex-col items-center justify-center">
                <div className="lg:w-[650px] text-center text-[1.7rem] tracking-tight lg:text-[2.6rem] font-bold">Produtos para sua empresa</div>
            </div>
            <Carousel
                responsive={responsive}
                containerClass="w-[95vw] sm:w-[90vw] xl:w-[90vw] 2xl:w-[70vw]"
                className="cursor-grab"
                itemClass="px-4"
                beforeChange={handleBeforeChange}
            >
                {ProductsRender.map((item, index) => (
                    <div style={{padding: 30}}>
                    <StyledProduct key={index} scale={index == currentItem ? 1.1 : 1} >
                        <img
                            style={{ userSelect: "none", cursor: "default" }}
                            src={item.img} alt="" className="pointer-events-none w-[100%] h-[200px] border-b-[1px] border-b-[#4A4D4F] object-contain" />
                        <div className="flex flex-col justify-center items-center after:w-[100%] gap-5 ">
                            <div className="text-[1.7rem] text-[#000000] font-bold relative after:absolute after:bottom-0 after:right-[-20px] after:w-[3px] after:h-[100%] after:bg-[#000000]">{item.title}</div>
                            <div className="text-[.8rem] lg:text-[1rem] text-center">{item.description}</div>
                        </div>
                        <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{ marginBottom: 30 }}>
                            <div className=" z-10 h-full text-[.5rem] lg:text-[.9rem] flex justify-center items-center">Saiba mais</div>
                            <div className=" z-10 h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" size={20} className="animate-pulse" style={{ marginTop: 2 }} /></div>
                        </StyledLink>
                    </StyledProduct>
                    </div>
                ))}
            </Carousel>
        </StyledContainer>

    )
}