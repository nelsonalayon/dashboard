import styled from "styled-components";

export const AppContainer = styled.article`
display:flex;
flex-direction:column;
max-width:1160px;
margin:0 auto;
padding-top:40px;
`
export const AppTitle = styled.div`
padding-left:14px;

&:nth-child(1) {
    padding-bottom: 30px;
}


& h2 {
    margin:0;
}

& h4 {
    letter-spacing: 0;
    font-weight:700;    
    color: ${props => props.isDark ? "var(--text-blue-dark)" : "var(--text-blue-white)" };
}

@media (max-width:580px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

`
export const SectionContainer = styled.section`
display:flex;
justify-content:center;
flex-wrap: wrap;
padding-bottom: 30px;
`

