import React from "react"
import Debora from "../assets/debora.png"
import git from "../assets/git.png"
import linkedin from "../assets/linkedin.png"
import * as S from "./Style.jsx"



function Inicio() {
    return (
        <S.ContainerInicio>

            <S.Debora src={Debora} alt="Debora" />

            
            <S.Section>
            
            <S.Div1>
                <h2>Olá, eu sou a Débora Carolina!!!</h2>
            </S.Div1>
            
            
            <S.Div2>
               
                <a href=" https://github.com/Debora-Carolina" target="_blank">  <img src={git} alt="git"/></a>
                <a href="https://www.linkedin.com/in/d%C3%A9bora-carolina-8b02321b6/" target="_blank"> <img src={linkedin} alt="linkedin"/></a>
            </S.Div2>

            </S.Section>

        </S.ContainerInicio>
    )
}

export default Inicio