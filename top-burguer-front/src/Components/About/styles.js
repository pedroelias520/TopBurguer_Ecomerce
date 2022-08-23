import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Jumper;
        src: url(../../../public/Fonts/Jumper-Regular.ttf);
    }
`

export const TextField = styled(motion.div)`
    text-align: start;        
    
    .textTitle{
        font-size: 2vw;
        color: white;
        margin: 0;
    }

    .bigTextTitle{
        font-family: 'JumperBold'
        font-size: 5vw;
        margin:0;
        color: black;
    }
`

export const ImageStyle = styled(motion.image)`
    
`
