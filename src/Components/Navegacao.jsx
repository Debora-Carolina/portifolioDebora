import React from "react"
import Inicio from "./Inicio"
import Sobre from "./Sobre"
import Projetos from "./Projetos"
import * as S from "./Style"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao() {
    return (

        <S.Header>
            <BrowserRouter>
                <S.Nav>
                    <S.Lista>
                        <li> <Link to="/"> Início </Link> </li>
                        <li> <Link to="/Sobre"> Sobre </Link> </li>
                        <li> <Link to="/Projetos"> Projetos </Link> </li>
                    </S.Lista>
                </S.Nav>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Projetos" element={<Projetos />} />
                </Routes>

            </BrowserRouter>
        </S.Header>


    )


}
export default Navegacao 