import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Jumper;
        src: url(../../../public/Fonts/Jumper-Regular.ttf);
    }
`

export const TextField = styled(motion.div) `    
    font-family: 'JumperThin';
    color: black;    
    display: flex;    

    .headerText{
        text-align: start;  
        
        .primaryText {                        
            margin:0;
            font-family:'JumperRegular';
        }
        .secondaryText{
            margin: 0;
        }

    }    
`