import styled from "styled-components";

export const AppContainer = styled.article`

  display: flex;
  flex-direction: column;
  max-width: 1160px;
  margin: 0 auto;
  padding-top: 40px;
`;
export const AppTitle = styled.div`

  display:flex;
  justify-content:space-between;
  padding-left: 14px;

  &:nth-child(1) {
    padding-bottom: 30px;
  }

  & h2 {
    margin: 0;
  }

  & h4 {
    letter-spacing: 0;
    font-weight: 700;
    color: ${(props) =>
      props.isDark ? "var(--text-blue-dark)" : "var(--text-blue-white)"};
  }

  @media (max-width: 580px) {    
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
  
`;

export const Button = styled.button`
cursor:pointer;
position:relative;
width: 55px;
heigth: 15px;
border-radius:20px;
border:none;
background: ${props => props.isDark ? "var(--toggle-dark);" : "var(--toggle-light);" } ;
& div {
  background:${props => props.isDark ? "var(--background-dark);" : "var(--background-white);" };
  width:24px;
  height:24px;
  border-radius:50%;
  position:absolute;
  top:5px;
  left:${props => props.isDark ?  "5px" : "25px"};
  transition:1s;
}
@media (max-width: 580px) {    
  & div {
    top:2px;    
  }
}

`
export const ButtonGroup = styled.div`

display:flex;

& h4 {
  margin: 10px 15px 0 0;
  font-size:14px;
}

@media (max-width: 580px) {    
  margin-bottom: 30px;
  transform:scale(0.8)
}

`