import { useCallback, useEffect, useState } from "react"
import { RenderItems } from "./data"
import { FaFacebookF, FaLinkedinIn, FaUserFriends } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import logo from "../../assets/imgs/home/logo.png"
import { RiMenu2Fill } from "react-icons/ri"
import { StyledListItem, StyledSocialMidia, StyledDropdownList, StyledLink } from "../../styles/styledComponents/styledComponents"
import { CiInstagram, CiYoutube } from "react-icons/ci"
import { PiMouseScrollLight } from "react-icons/pi"

export default function Home() {

    const [item, setItem] = useState<Number>(0)
    const [hoverField, setHoverField] = useState<Number>(0)
    const [lang, setLang] = useState<{ lang: String, state: Boolean }>({
        lang: "PT",
        state: false
    })

    const handleSetItem = useCallback((i: Number) => {
        const element = document.getElementById("image-screen")
        if (element) {
            element.style.opacity = "0"
            setItem(i)
            element.style.opacity = "1"
        }
    }, [setItem])

    const handleMouseOver = useCallback((i: Number) => {
        setHoverField(i)
    }, [setHoverField])

    const handleMouseLeave = useCallback(() => {
        setHoverField(0)
    }, [setHoverField])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const value = (Number(item) + 1) % RenderItems.length
            handleSetItem(value)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [item, handleSetItem])

    return (
        <div className="relative h-[100vh]">
            <header
                style={{ padding: 10, zIndex: 50, position: "absolute", top: 0, left: 0, width: "100%" }}
                className="h-20 w-full flex items-center  justify-between  lg:justify-evenly">
                <div><img src={logo} alt="logo da empresa" className="w-[150px]" /></div>
                <ul className="flex flex-row gap-5 hidden lg:flex">
                    <StyledListItem
                        onMouseOver={() => handleMouseOver(1)}
                        onMouseLeave={handleMouseLeave}>
                        Sobre nós
                        <IoIosArrowDown />
                        <StyledDropdownList isVisible={hoverField === 1}>
                            <li className="text-[#55554e] cursor-pointer">Equipe</li>
                            <li className="text-[#55554e] cursor-pointer">Valores</li>
                            <li className="text-[#55554e] cursor-pointer">Parceiros</li>
                            <li className="text-[#55554e] cursor-pointer">Clientes</li>
                        </StyledDropdownList>
                    </StyledListItem>
                    <StyledListItem
                        onMouseOver={() => handleMouseOver(2)}
                        onMouseLeave={handleMouseLeave}>
                        Cultura e pessoas
                        <IoIosArrowDown />
                        <StyledDropdownList isVisible={hoverField === 2}>
                            <li className="text-[#55554e] cursor-pointer">Equipe</li>
                            <li className="text-[#55554e] cursor-pointer">Valores</li>
                            <li className="text-[#55554e] cursor-pointer">Parceiros</li>
                            <li className="text-[#55554e] cursor-pointer">Clientes</li>
                        </StyledDropdownList>
                    </StyledListItem>
                    <StyledListItem
                        onMouseOver={() => handleMouseOver(3)}
                        onMouseLeave={handleMouseLeave}>
                        Eventos
                        <IoIosArrowDown />
                        <StyledDropdownList isVisible={hoverField === 3}>
                            <li className="text-[#55554e] cursor-pointer">Equipe</li>
                            <li className="text-[#55554e] cursor-pointer">Valores</li>
                            <li className="text-[#55554e] cursor-pointer">Parceiros</li>
                            <li className="text-[#55554e] cursor-pointer">Clientes</li>
                        </StyledDropdownList>
                    </StyledListItem>
                    <StyledListItem
                        onMouseOver={() => handleMouseOver(4)}
                        onMouseLeave={handleMouseLeave}>
                        Soluções
                        <IoIosArrowDown />
                        <StyledDropdownList isVisible={hoverField === 4}>
                            <li className="text-[#55554e] cursor-pointer">Equipe</li>
                            <li className="text-[#55554e] cursor-pointer">Valores</li>
                            <li className="text-[#55554e] cursor-pointer">Parceiros</li>
                            <li className="text-[#55554e] cursor-pointer">Clientes</li>
                        </StyledDropdownList>
                    </StyledListItem>
                    <StyledListItem
                        onMouseOver={() => handleMouseOver(5)}
                        onMouseLeave={handleMouseLeave}>
                        Fale conosco
                        <IoIosArrowDown />
                        <StyledDropdownList isVisible={hoverField === 5}>
                            <li className="text-[#55554e] cursor-pointer">Equipe</li>
                            <li className="text-[#55554e] cursor-pointer">Valores</li>
                            <li className="text-[#55554e] cursor-pointer">Parceiros</li>
                            <li className="text-[#55554e] cursor-pointer">Clientes</li>
                        </StyledDropdownList>
                    </StyledListItem>
                </ul>
                <div className="flex flex-row justify-center items-center gap-3">
                    <div className="hidden lg:flex flex flex-row justify-center items-center cursor-pointer border-2 border-white h-[40px] w-[160px] rounded-md">
                        <div className="bg-white flex justify-center items-center h-full w-[25%]"><FaUserFriends size={20} color="0096FB" /></div>
                        <div className="flex flex-row justify-center items-center   h-full w-[75%] text-white hover:bg-[#ffffff70]  transition-all duration-300">Sou Cliente</div>
                    </div>
                    <div className="hidden lg:flex flex flex-row relative">
                        <div className="flex flex-row justify-center items-center cursor-pointer text-white"
                            onClick={() => setLang({
                                ...lang,
                                state: !lang.state
                            })}>
                            <div>{lang.lang}</div>
                            <IoIosArrowDown />
                        </div>
                        <ul className={`${lang.state ? "block" : "hidden"} flex flex-col justify-center items-center rounded-md absolute bottom-[-60px] w-[50px] bg-white`}>
                            <li onClick={() => setLang({ lang: "PT", state: false })} className="cursor-pointer" >PT</li>
                            <li onClick={() => setLang({ lang: "EN", state: false })} className="cursor-pointer" >EN</li>
                        </ul>
                    </div>
                    <div className="lg:hidden flex flex-row justify-center items-center cursor-pointer text-white">
                        <RiMenu2Fill color="#fff" size={40} />
                    </div>
                </div>
            </header>
            {
                RenderItems.map((obj, index) => {
                    return (
                        <div
                            id="image-screen"
                            key={obj.id}
                            style={{ backgroundImage: `url(${obj.img})`, zIndex: 10, opacity: index === item ? 1 : 0 }}
                            className={`absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center trasition-ease-in-out duration-500`}
                        >
                            <div
                                className="w-[80vw]  lg:w-[50vw] flex justify-center lg:items-start items-center gap-3 trasition-ease-in-out duration-500">
                                <div className="w-[90%] flex flex-col gap-3 items-center lg:items-start">
                                    <h1 className=" lg:text-[2.6rem] font-bold text-[#0096FB]">{obj.title}</h1>
                                    <p className={`text-[1.7rem] ${obj.title ? "lg:text-[2rem]" : "lg:text-[3rem]"}  text-white font-bold lg:text-start text-center`}>{obj.description}</p>
                                    <StyledLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                                        <div className="h-full flex text-[.5rem] lg:text-[.9rem] justify-center items-center">Saiba mais</div>
                                        <div className="h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" size={20} className="animate-pulse" style={{ marginTop: 2 }} /></div>
                                    </StyledLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div
                style={{ zIndex: 20 }}
                className="flex flex-col justify-around items-center gap-1 absolute bottom-[45vh] lg:right-[20px] right-[10px] border-[1px] border-white rounded-full h-[80px] w-5">
                {RenderItems.map((value, index) => {
                    return (
                        <div
                            style={{ backgroundColor: index === Number(item) ? "#0096FB" : "white", }}
                            key={value.id}
                            className={`w-[10px] h-[10px] bg-white rounded-full cursor-pointer ${index === Number(item) ? "animate-pulse" : ""} `}
                            onClick={() => handleSetItem(index)}
                        >
                        </div>
                    )
                })}
            </div>

            <div
                style={{ zIndex: 20 }}
                className="flex flex-col justify-around items-center gap-3 absolute lg:left-[20px] left-[10px] bottom-[40vh] ">
                <StyledSocialMidia>
                    <FaLinkedinIn color="#fff" size={20} />
                </StyledSocialMidia>
                <StyledSocialMidia>
                    <CiInstagram color="#fff" size={20} />
                </StyledSocialMidia>
                <StyledSocialMidia>
                    <FaFacebookF color="#fff" size={20} />
                </StyledSocialMidia>
                <StyledSocialMidia>
                    <CiYoutube color="#fff" size={20} />
                </StyledSocialMidia>
            </div>

            <div className="z-50 absolute bottom-[30px] flex justify-center items-center w-full cursor-pointer">
                <a href="#solutions"><PiMouseScrollLight color="#fff" size={30} className="animate-pulse" /></a>
            </div>
        </div>
    )
}