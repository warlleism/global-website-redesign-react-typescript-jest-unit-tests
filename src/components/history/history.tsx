import { StyledContainer, StyledLink } from "../../styles/styledComponents/styledComponents";
import aguiaBrancaLogo from "../../assets/imgs/history/grupo-aguia-branca.png"
import backgroundAguiaBranca from "../../assets/imgs/history/backgroundAguiaBranca.png"
import logoReserva from "../../assets/imgs/history/logo-reserva.png"
import imgReserva from "../../assets/imgs/history/img-reserva.png"
import imgWine from "../../assets/imgs/history/img-wine.png"
import wineLogo from "../../assets/imgs/history/logo-wine.png"
import imgPetz from "../../assets/imgs/history/img-petz.png"
import petzLogo from "../../assets/imgs/history/petz-logo.png"
import { IoIosArrowForward } from "react-icons/io";

export default function History() {
    return (
        <StyledContainer>
            <div className="flex flex-col items-center justify-center">
                <div style={{ marginBottom: 10 }} className="text-[1.7rem] tracking-tight lg:text-[2.6rem] font-bold text-center">Histórias de <span className=" text-[#0096FB]">sucesso</span> sucesso</div>
                <div className="lg:w-[650px] text-center">Conheça as histórias de transformação que promovemos em nossos clientes.</div>
            </div>

            <div className="flex flex-col justify-between w-full gap-5">
                <div
                    style={{ backgroundImage: `url(${backgroundAguiaBranca})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                    className="w-full h-[50vh] rounded-sm flex flex-col justify-center items-center relative gap-3">
                    <div style={{ background: "linear-gradient(to left, #00000000, #000000)" }} className="absolute top-0 left-0 w-full h-full" />
                    <img style={{ marginBottom: 30 }} src={aguiaBrancaLogo} alt="" className="z-10 w-[300px]" />
                    <div className=" z-10 text-white text-[.8rem] lg:text-[1.2rem] w-[90%] lg:w-[500px] text-center">Celebramos 10 anos de parceria de sucesso em logística com o Grupo Águia Branca, impulsionando inovação e crescimento!</div>
                    <div className=" z-10 text-white rounded-sm text-[0.8rem] bg-[#4A4D4F]  w-[70px] h-[20px] flex justify-center items-center">Logística</div>
                    <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="z-10" style={{ marginTop: 'clamp(0px, 20px, 20px)' }}>
                        <div className=" z-10 h-full text-[.5rem] lg:text-[.9rem] flex justify-center items-center">Saiba mais</div>
                        <div className=" z-10 h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" className="animate-pulse text-[1rem] lg:text-[1.5rem]" style={{ marginTop: -2 }} /></div>
                    </StyledLink>
                </div>

                <div className="flex flex-row justify-between w-full h-[30vh] lg:h-[50vh]">
                    <div className="w-[49%] h-full rounded-sm bg-[#1D1D1D] relative">
                        <img className="absolute bottom-0 right-0 w-[400px]" src={imgReserva} alt="" />
                        <div className="z-10 flex flex-col gap-3" style={{ paddingLeft: 'clamp(0rem, 4vw, 8rem)', paddingTop: 'clamp(0rem, 4vw, 8rem)' }}>
                            <img className="z-10 w-[100px] lg:w-[160px]" src={logoReserva} alt="" />
                            <div className="z-10 text-white lg:w-[360px] text-start text-[.6rem] lg:text-[1.3rem]">Parceiros na transformação digital, impulsionamos inovação e eficiência para levar seu negócio ao próximo nível.</div>
                            <div className="z-10 text-white rounded-sm text-[0.8rem] bg-[red]  w-[70px] h-[20px] flex justify-center items-center font-bold">Varejo</div>
                            <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="" style={{ marginTop: 'clamp(0px, 20px, 20px)' }}>
                                <div className="h-full text-[.5rem] lg:text-[.9rem] flex justify-center items-center">Saiba mais</div>
                                <div className="h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" className="animate-pulse text-[1rem] lg:text-[1.5rem]" /></div>
                            </StyledLink>
                        </div>
                    </div>
                    <div className="w-[49%] h-full rounded-sm bg-[#0075ff] relative">
                        <img className="absolute bottom-0 right-0 w-[400px] " src={imgPetz} alt="" />
                        <div className="flex flex-col gap-3" style={{ paddingLeft: 'clamp(0rem, 4vw, 8rem)', paddingTop: 'clamp(0rem, 4vw, 8rem)' }}>
                            <img className="z-10 w-[60px] lg:w-[160px]" src={petzLogo} alt="" />
                            <div className="z-10 text-white lg:w-[360px] text-start text-[.6rem] lg:text-[1.3rem]">Apoiando a jornada de liderança da Petz no mercado varejista, por intermédio de equipes altamente especializadas.</div>
                            <div className="z-10 text-[#000000] rounded-sm text-[0.8rem] bg-[#FBFF00]  w-[70px] h-[20px] flex justify-center items-center font-bold">Varejo</div>
                            <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{ marginTop: 'clamp(0px, 20px, 20px)', backgroundColor: '#FBFF00' }}>
                                <div className="h-full text-[#000000] text-[.5rem] lg:text-[.9rem] flex justify-center items-center">Saiba mais</div>
                                <div className="h-full flex justify-center items-center"> <IoIosArrowForward color="#000000" className="animate-pulse text-[1rem] lg:text-[1.5rem]" /></div>
                            </StyledLink>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[50vh] rounded-sm flex flex-col justify-center items-center relative bg-[#822442]">
                    <img className="absolute bottom-0 right-0 w-[400px] " src={imgWine} alt="" />
                    <div className=" z-10 flex flex-col gap-3 w-full " style={{ paddingLeft: 'clamp(0rem, 4vw, 8rem)' }}>
                        <img className="w-[100px] lg:w-[160px]" src={wineLogo} alt="" />
                        <div className="text-white w-[360px] text-start text-[1.3rem]">Compromisso contínuo no <span className="font-bold text-[#FF0051]">APP</span> e em diversas iniciativas tecnológicas da maior do mundo!</div>
                        <div className="text-white rounded-sm text-[0.8rem] bg-[#FF0051]  w-[70px] h-[20px] flex justify-center items-center font-bold">Varejo</div>
                        <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{ marginTop: 20, backgroundColor: '#FF0051' }}>
                            <div className="h-full text-[#fff] text-[.5rem] lg:text-[.9rem] flex justify-center items-center">Saiba mais</div>
                            <div className="h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" className="animate-pulse text-[1rem] lg:text-[1.5rem]" /></div>
                        </StyledLink>
                    </div>
                </div>

                <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{ marginTop: 20, backgroundColor: '#FF0051', width: 300, height: 40, margin: '0 auto' }}>
                    <div className="h-full text-[#fff] text-[.9rem] flex justify-center items-center">Ver mais histórias</div>
                    <div className="h-full flex justify-center items-center"> <IoIosArrowForward color="#fff" className="animate-pulse  text-[1.5rem]" style={{ marginTop: -2 }} /></div>
                </StyledLink>
            </div>
        </StyledContainer>
    )
}