import React from "react"
import * as S from "./Style"
import Mini from "../assets/mini-wiki.png"
import Loja from "../assets/loja.png"
import Fantastika from "../assets/fantastika.png"
import Cartoon from "../assets/cartoon.png"
import Cruzeiro from "../assets/cruzeiro.png"
import Patrocinadores from "../assets/patrocinadores.png"


function Projetos () {
return (
    <S.MainProjetos>

        <S.DivProjetos>
        <h2>PROJETOS EM HTML, CSS e REACT</h2>
        </S.DivProjetos>




    <S.SectionProjetos>


        <S.DivProjeto>
                <h2> MINI WIKI </h2>
                <h2>PROJETO BASEADO EM UMA MINI WIKI</h2>
                <h3>HTML - CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href=" https://codesandbox.io/s/desafio-01-debora-carolina-w64g7s?file=/index.html&authuser=0" target="_blank">  <img src={Mini} alt="Mini Wiki"/></a>                      

        </S.DivProjeto>


        <S.DivProjeto>
                <h2> LOJINHA </h2>
                <h2>PROJETO BASEADO EM UMA LOJA DE ROUPAS</h2>
                <h3>HTML E CSS - CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href=" https://github.com/Debora-Carolina/Desafio_loja.git?authuser=0" target="_blank">  <img src={Loja} alt="Loja de Roupas"/></a>                      

        </S.DivProjeto>


        <S.DivProjeto>
                <h2> FANTASTIKA </h2>
                <h2>SITE BASEADO EM UM PETSHOP</h2>
                <h3>HTML E CSS - CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href=" https://github.com/Debora-Carolina/desafio-final.git?authuser=0" target="_blank">  <img src={Fantastika} alt="Fantastika"/></a>                      

        </S.DivProjeto>
        
    </S.SectionProjetos>



    
    <S.SectionProjetos>


        <S.DivProjeto>
                <h2>VARIÁVEIS E CONDIÇÕES</h2>
                <h2>JAVASCRIPT - LÓGICA DA PROGRAMAÇÃO</h2>
                <h3>CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href="https://github.com/Debora-Carolina/Desafio-Logica.git?authuser=0" target="_blank">  <img src={Cruzeiro} alt="Cruzeiro"/></a>                      

        </S.DivProjeto>


        <S.DivProjeto>
                <h2> CARTOON </h2>
                <h2>PROJETO BASEADO NO SITE CARTOON NETWORK</h2> 
                <h3>REACT, STYLED-COMPONENTS, RESPONSIVO, HOOK USESTATEMINI</h3>
                <h3>CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href=" https://github.com/Debora-Carolina/Cartoon.git" target="_blank">  <img src={Cartoon} alt="Cartoon"/></a>                      

        </S.DivProjeto>


        <S.DivProjeto>
                <h2> PATROCINADORES </h2>
                <h2> USESTATE, USEEFFECT, DOM, STYLED-COMPONENTS JS HOOKS, STYLED-COMPONENTS, DOM </h2>
                <h3>CLIQUE NA IMAGEM PARA SABER MAIS </h3>
                    
                <a href=" https://github.com/Debora-Carolina/Cartoon.git" target="_blank">  <img src={Patrocinadores} alt="Patrocinadores"/></a>                      

        </S.DivProjeto>
        
    </S.SectionProjetos>










    </S.MainProjetos>




)
}

export default Projetos




