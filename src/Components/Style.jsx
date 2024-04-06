import styled from "styled-components"


export const Header = styled.header`
height: 80vh;
border: solid white;    
`

export const Nav = styled.nav`
border: solid green;    
`

export const Lista = styled.ul`
height: 20vh;
border: solid pink;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

a {
text-decoration: none;
font-size: 1.5rem;
text-transform: uppercase;

}
`

export const ContainerInicio = styled.main`
display: flex;
justify-content: space-around;
border: solid red;
height: 60vh;
`

export const Section = styled.section`
border: solid purple;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 70%;
padding: 60px;
`

export const Debora = styled.img`
 width: 20vw;
 height: 40vh;
 border-radius: 100%;
 margin-top: 30px;
`
export const Div1 = styled.div`
border: solid red;  
font-size: 1rem;
`

export const Div2 = styled.div`
margin-top: 10px;
border: solid red;    
display: flex;
flex-direction: space-around;

img{
    width: 45%;
    /* border: solid red; */
    /* background-color: green; */
}
`



function Style() {
    return (
        <>

            <h2>Olá, Eu sou a Débora Carolina</h2>

        </>
    )
}

export default Style