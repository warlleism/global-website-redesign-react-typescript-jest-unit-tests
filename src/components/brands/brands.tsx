import Cooca from "../../assets/imgs/brands/cooca.png"
import Fort from "../../assets/imgs/brands/fort.png"
import Grupo from "../../assets/imgs/brands/grupo.png"
import Kara from "../../assets/imgs/brands/kara.png"
import Petz from "../../assets/imgs/brands/petz.png"
import Wine from "../../assets/imgs/brands/wine.png"
import Reserva from "../../assets/imgs/brands/reserva.png"
import Vix from "../../assets/imgs/brands/vix.png"
import Will from "../../assets/imgs/brands/will.png"
import { StyledContainer, StyledLink } from "../../styles/styledComponents/styledComponents"
import { IoIosArrowForward } from "react-icons/io"


export default function Brands() {
    return (
        <StyledContainer>
            <div className="flex flex-col lg:flex-row justify-between items-center w-[100%] gap-5 lg:gap-0">
                <div className="flex flex-col gap-5 w-[100%] lg:w-[40%]">
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Cooca} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Fort} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Grupo} alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Kara} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Petz} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Wine} alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Reserva} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Vix} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Will} alt="" />
                    </div>
                </div>
                <div className="w-[100%] lg:w-[49%] flex flex-col justify-center items-center lg:items-start lg:justify-between gap-5">
                    <div className="text-[1.5rem] font-bold text-[#0000007d]">MARCAS PERCEIRAS</div>
                    <div className="mt-5">
                        <div className="text-[1.3rem] lg:text-[2rem] text-center lg:text-start font-bold">Mova-se mais rápido com</div>
                        <div className="text-[1.3rem] lg:text-[2rem] text-center lg:text-start font-bold">Com Parceria <span className="text-[#0096FB]">Globalsys</span></div>
                        <div className="text-[1.4rem] text-center lg:text-start font-bold">Entre em contato com a gente!</div>
                    </div>
                    <div className="mt-5 text-lg">
                        <div className="text-[#4d4d4d] text-center lg:text-start">Nosso especialista está pronto para esclarecer suas dúvidas e ajudá-lo a encontrar as <span className="font-bold text-[#0096FB]">melhores soluções</span> para o seu sucesso.</div>
                        <div className="text-[#4d4d4d] text-center lg:text-start">Com experiência e dedicação, oferecemos <span className="font-bold text-[#0096FB]">suporte personalizado</span> para guiá-lo no caminho certo.</div>
                    </div>
                    <StyledLink href="https://globalsys.com.br/contato" target="_blank" style={{ width: 300, height: 50 }}>
                        <div>Entre em contato</div>
                        <div> <IoIosArrowForward color="#fff" size={20} className="animate-pulse" style={{ marginTop: 2 }} /></div>
                    </StyledLink>
                </div>
            </div>
        </StyledContainer>
    )
}