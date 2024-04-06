import React from "react"
import * as S from "./Style.jsx"
import Anhanguera from "../assets/anhanguera.png"
import VnW from "../assets/vainaweb.png"
import Css from "../assets/css.png"
import JavaSript from "../assets/javascript.png"
import Html from "../assets/html.png"
import Foco from "../assets/foco.png"

function Sobre() {
    return (
    
        <S.SobreMain>

            <S.SectionDoSobre>

                <h2>FORMAÇÃO</h2>

                <S.Card>
                    <S.DivCard>
                        <h2> Análise e Desenvolvimento de Sistemas</h2>
                        <h2> Jun/2022 - Dez/2024</h2>
                        <img src={Anhanguera} alt="Logo Anhanguera" />
                    </S.DivCard>
                    
                    <S.DivCard>
                        <h2>Desenvolvimento front-end</h2>
                        <h2>Ago/2023 - Maio/2024</h2>
                        <img src={VnW} alt="Logo do vnw" />
                    </S.DivCard>
                </S.Card>

            </S.SectionDoSobre>



            <S.SectionDoSobre2>
                <h2>HABILIDADES</h2>

                <S.Card>
                    <S.DivCard2>
                        <div>
                            <img src={Css} alt="logo css" />
                            <h2>CSS</h2>
                        </div>

                        <div>
                            <img src={JavaSript} alt="logo javascript" />
                            <h2>JavaScript</h2>
                        </div>

                        <div>
                            <img src={Html} alt="logo html5" />
                            <h2>HTML</h2>
                        </div>
                    </S.DivCard2>
                </S.Card>
            </S.SectionDoSobre2>

            <S.SectionDoSobre3>
                <h2>PROFISSIONAL</h2>
                <S.Card>
                    <S.DivCard>
                        <S.DivCard3>
                        <h2> Profissional com mais de quatro anos de experiência como Gestora de Relacionamento no Colégio Objetivo, uma das principais redes de ensino do país. Possuo formação em Administração de Empresas pela Faculdade Santa Lúcia e estou atualmente cursando Análise e Desenvolvimento de Sistemas na Anhanguera Educacional, buscando uma transição de carreira para o campo da tecnologia.</h2>
                        
                        <img src={Foco} alt="imagem foco" />
                    </S.DivCard3>
                    
                    </S.DivCard>
                </S.Card>
            </S.SectionDoSobre3>

        </S.SobreMain>
        


    )
}

export default Sobre;

