import styled from "styled-components"


export const Header = styled.header`
height: 80vh;
//border: solid white;    
`

export const Nav = styled.nav`
//border: solid green;    
`

export const Lista = styled.ul`
height: 20vh;
//border: solid pink;
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
//border: solid red;
height: 60vh;
`

export const Section = styled.section`
//border: solid purple;
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
//border: solid red;  
font-size: 1rem;
`

export const Div2 = styled.div`
margin-top: 10px;
//border: solid red;    
display: flex;
flex-direction: space-around;

img{
    width: 45%;
  
}
`


//Estilização Sobre

export const SobreMain = styled.main`
display: flex;
justify-content: space-evenly;
align-items: center;
//border: solid white;
height: 100vh;
`

export const SectionDoSobre = styled.section`
border: solid white 5px;
border-radius: 50px;
height: 80vh;
width: 30vw;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: white;

  }

  img{
    width: 20%;
   
}
`





export const SectionDoSobre2 = styled.section`
border: solid white 5px;
border-radius: 50px;
height: 80vh;
width: 30vw;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: white;

  }

  img{
 
   
}
`


export const SectionDoSobre3 = styled.section`
border: solid white 5px;
border-radius: 50px;
height: 80vh;
width: 30vw;

display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: white;

  }

  img{
 width: 55%;
 height: 30%;
   
}
`
    


//Card é uma só para as três. 
export const Card = styled.div `
    //border: solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;
    width: 25vw;

    h2 {
  text-align: justify;
  font-size: 1rem;
  color: white;

  }


`

//Div card é uma as três.
export const DivCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

h2 {
    color: white;
}


`


export const DivCard2 =styled.div `
    //border: solid red;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 70vh;

    div {
    display: flex;
    align-items: center;

    }
`

export const DivCard3 =styled.div `
    //border: solid pink;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 60vh;
 

    div {
    display: flex;
    align-items: center;

    }
`

//Estilização Projetos


export const MainProjetos = styled.main`
`


export const DivProjetos = styled.div`
    display: flex;
    justify-content: space-around;
    //border: solid red;
    align-items: center;
    margin-top: 20px;
`

export const SectionProjetos = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    //border: solid green;
   
    h2 {
  text-align: center;
  color: white;

  }
  
`


export const DivProjeto = styled.div`
border: solid white 5px;
border-radius: 50px;
height: 70vh;
width: 20vw;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
margin-top: 50px;
background-color: #D496A7;
h2 { 
  
  background-color: #D496A7 ;
  color: black;  
  font-size: 1rem;
}

h3 { 
  
  background-color: #D496A7 ;
  color: black;  
  font-size: 0.5rem;

  }


  img{
   width: 15vw;
   height: 30vh;
  }
`

