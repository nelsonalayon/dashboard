import styled from 'styled-components'

export const Container = styled.button`
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.isDark ? "var(--background-card-dark);" : "var(--background-card-white);" } ;
    border-radius: 3px;
    box-shadow: inset 0em 5px ${props => props.info.color};
    width: 260px;
    margin:15px;
    padding: 20px 0;
    transition:1s;
    border:none;

    &:hover {
        background-color: ${props => props.isDark ? "var(--top-background-dark);" : "var(--top-background-white);" } ;
    }
`

export const User = styled.div`

padding:15px;
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
export const Followers = styled.div`
display:flex;
flex-direction:column;
align-items:center;
& h4 {
    margin:10px;
}

`

export const Today = styled.div`

padding: 10px 0 15px 0;
& h4 {
    letter-spacing: 0;
    font-weight:700;
    display:inline;
    color: ${props => props.info.today > 0 ? "var(--lime-green)" : "var(--bright-Red)" };    
}
& img {
    display:inline;
}
`



