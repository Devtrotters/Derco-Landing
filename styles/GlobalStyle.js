import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
       
        box-sizing: border-box;
        list-style-type: none;
        font-family: 'Manrope', sans-serif;
        padding:0;
        margin:0;
        
        
    }
    }
    
    html { 
        overflow:auto;
        scroll-behavior: smooth;
        
        
        
       }

    
    body {
         background-color: ${(props) => props.theme.color.gris.dark};
         color: ${(props) => props.theme.color.gris.light};
        
     
         
    }
    
`;

export default GlobalStyle;
