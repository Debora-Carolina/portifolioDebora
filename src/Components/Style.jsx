import styled from "styled-components"

export const Nav = styled.nav`
    
`

export const Lista = styled.ul`
    width: 100%;

    a {
text-decoration: none;
font-size: 1.5 rem;

    }
`

export const Header = styled.header`
height: 80vh;
border: solid white; 
    

`


export const Debora = styled.img`
 width: 20vw;
 height: 40vh;
 border-radius: 50%;
`

export const ContainerInicio = styled.main `
display: flex;
border: solid red;
`




function Style () {
return (
    <>
        
        <h2>Olá, Eu sou a Débora Carolina</h2>

    </>
)
}

export default Style