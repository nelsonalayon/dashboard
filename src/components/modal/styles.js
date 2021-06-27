import styled from "styled-components";

export const ModalBackground = styled.div`
position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 30%);

`

export const ModalContainer = styled.div`
background: azure;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isDark ? "var(--background-card-dark);" : "var(--background-card-white);" } ;
  padding: 90px 110px;
  width: 75%;
  & h3 {
    color: ${props => props.isDark ? "var(--text-white-dark);" : "var(--text-white-white);" } ;
  }

`

export const User = styled.div`

display:flex;
align-items:center;
& img {
    margin: 5px 6px 0 0;
}

& h4 {
    letter-spacing: 0;
    font-weight:700;
}
`

export const Resume = styled.div`
display:flex;
flex-wrap:wrap;
& div {
  display:flex;
  justify-content:center;
  align-items:center;
}

& h4 {
  letter-spacing: 0;
  font-weight:700;
  margin:0;
  font-size:13px;
  
}
`

export const Item = styled.div`
padding: 20px 80px 0 0;
& div {
  padding: 0 10px 0 0;
}
`

export const RegGreenText1 = styled.h1`
color: ${props => props.data > 0 ? "var(--lime-green)" : "var(--bright-Red)" };
` 

export const RegGreenText2 = styled.h1`
font-size:inherit;
color: ${props => props.data > 0 ? "var(--lime-green)" : "var(--bright-Red)" };
` 