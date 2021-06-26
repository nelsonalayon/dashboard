import styled from 'styled-components'

export const Container = styled.article`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: var(--background-card-dark);
    border-radius: 3px;
    box-shadow: inset 0em 5px ${props => props.info.color};
    width: 260px;
    margin:15px;
    padding: 20px 0;
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


