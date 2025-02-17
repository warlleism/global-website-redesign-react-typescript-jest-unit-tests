import Logo from "../../assets/imgs/footer/logo.png"
import Certificate1 from "../../assets/imgs/footer/certificate-1.png"
import Certificate2 from "../../assets/imgs/footer/certificate-2.png"
import Group1 from "../../assets/imgs/footer/group-1.png"
import Group2 from "../../assets/imgs/footer/group-2.png"
import { FaHeadphonesAlt, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {

    return (
        <div style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50 }} className="w-full relative flex flex-col items-center bg-white gap-10">
            <img src={Logo} className="w-[200px] lg:w-[300px]" />

            <div className="flex flex-row flex-wrap justify-around w-[80vw] gap-5">
                <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                    <div className="flex flex-col gap-5">
                        <div className="text-[1.2rem] font-bold text-[#4C4C4C]">Conheça as outras marcas do grupo</div>
                        <div className="flex flex-row gap-5">
                            <img className="w-[50px]" src={Group1} />
                            <img className="w-[50px]" src={Group2} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-[1.2rem] font-bold text-[#4C4C4C]">certificados e reconhecimentos</div>
                        <div className="flex flex-row gap-5">
                            <img className="w-[50px]" src={Certificate1} />
                            <img className="w-[50px]" src={Certificate2} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                    <div>
                        <div className="text-[1.2rem] font-bold text-[#4C4C4C]">MATRIZ - ESPÍRITO SANTO</div>
                        <div className="w-full lg:w-[200px] text-[.9rem]">Av. Champagnat, 635 Praia da Costa - Vila Velha/ES CEP: 29100-011 <FaMapMarkerAlt color="#5d5d5d" className="inline-block" /></div>
                    </div>
                    <div>
                        <div className="text-[1.2rem] font-bold text-[#4C4C4C]">FILIAL - MINAS GERAIS</div>
                        <div className="w-full lg:w-[200px] text-[.9rem]">R. Soter Ramos Couto, 44, sala 406 Buritis - Belo Horizonte/MG CEP: 30493-010 - <FaMapMarkerAlt color="#5d5d5d" className="inline-block" /></div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                    <div>
                        <div className="text-[1.2rem] font-bold text-[#4C4C4C]">CENTRAL DE ATENDIMENTO</div>
                        <div className="w-full lg:w-[200px] text-[.9rem]">+55 (27) 3062-2230​ -  <FaHeadphonesAlt color="#5d5d5d" className="inline-block" /></div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center border-t-1 border-[#979797] h-[90px]">
                <div className=" text-[.8rem] lg:text-[1.2rem] font-normal text-[#4C4C4C]">© 2025 Globalsys. Todos os direitos reservados.</div>
            </div>

            <div className="absolute bottom-10 right-3"></div>
        </div>
    )
}