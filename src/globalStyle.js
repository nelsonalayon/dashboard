import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        // primary colors  

        --lime-green: hsl(163, 72%, 41%);
        --bright-Red: hsl(356, 69%, 56%);

        --facebook: hsl(195, 100%, 50%);
        --twitter: hsl(203, 89%, 53%);
        --instagram:linear-gradient(hsl(37, 97%, 70%),hsl(329, 70%, 58%));
        --youTube: hsl(348, 97%, 39%);

        //   Dark Theme

        --toggle-dark: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));

        //  Light Theme

        --toggle-light: hsl(230, 22%, 74%);


        // Dark Theme

        --background-dark: hsl(230, 17%, 14%);
        --top-background-dark: #333a56;
        --background-card-dark: #252b43;
        --text-blue-dark: hsl(228, 34%, 66%);
        --text-white-dark: hsl(0, 0%, 100%);
        --chart-dark: hsl(243, 51%, 70%);

        // Light Theme

        --background-white: hsl(0, 0%, 100%);
        --top-background-white: #e1e3f0;
        --background-card-white: hsl(227, 47%, 96%);
        --text-blue-white: hsl(228, 12%, 44%);
        --text-white-white: hsl(230, 17%, 14%);
        --chart-white: hsl(243, 51%, 70%);

    } 

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.isDark ? "var(--background-dark)" : "var(--background-white)" } ;
    font-family: 'Inter', sans-serif;   
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${props => props.isDark ? "var(--text-white-dark)" : "var(--text-white-white)" };
    margin:0;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.isDark ? "var(--text-white-dark)" : "var(--text-white-white)" };
    margin:0;
  }

  h4 {
    font-size: 9px;
    font-weight: 400;
    color: var(--text-blue-dark);
    letter-spacing: 4px;
    margin:0;
    color: ${props => props.isDark ? "var(--text-white-dark)" : "var(--text-white-white)" };
  }
 
`;

export default GlobalStyle;
