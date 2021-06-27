import styled from 'styled-components'

export const SmallContainer = styled.article`
    display:flex;  
    padding: 28px 0;     
    justify-content:space-around;
    align-items:center;
    background: ${props => props.isDark ? "var(--background-card-dark)" : "var(--background-card-white)" } ;
    border-radius: 3px;    
    width: 260px;
    margin:15px; 
    transition:1s;
    & h2 {
        margin: 0;
        color: ${props => props.isDark ? "var(--text-white-dark)": "var(--text-white-white)" }
    }

    & h4 {
        letter-spacing: 0;
        font-weight:700;
    }   
    &:hover {
        background-color: ${props => props.isDark ? "var(--top-background-dark);" : "var(--top-background-white);" } ;
        
    }
`

export const Percentaje = styled.h4`
color: ${props => props.info.today > 0 ? "var(--lime-green)" : "var(--bright-Red)" };

`

export const PercentajeContainer = styled.div`
& h4, img {
    display:inline
}
`

export const Likes = styled.h4`
margin: 0 0 25px 0;
`