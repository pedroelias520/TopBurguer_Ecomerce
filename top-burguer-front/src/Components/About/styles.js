import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Jumper;
        src: url(../../../public/Fonts/Jumper-Regular.ttf);
    }
`
export const MainDiv = styled(motion.div)`
    display: grid;    
    align-items: center;
    width: 100%;    
    justify-content: space-between;
`

export const TextField = styled(motion.div)`
    text-align: start;            
    grid-column: 1    
    grid-row: 1;
    margin: 10px;

    .textTitle{
        font-family: 'JumperThin';
        font-size: 2vw;        
        margin: 0;
        color: black;
    }

    .bigTextTitle{
        font-family: 'JumperBold';
        font-size: 5vw;
        margin:0;
        color: black;
    }
`

export const ImageStyle = styled(motion.div)`    
    margin: 2vw;
    grid-column: 2;
    grid-row: 1;        
    
    img {
        width: 30vw;        
    }

    @media (max-width: 450px) {
        img {
            width: 1vw;        
        }
    }
     
    @media (max-width: 1150px) {        
        img {
            width: 2vw;        
        }
    }
`

export const ButtonDiv = styled(motion.div) `
align-items: center;
padding:10px;

.buttonClick {
    font-family: 'JumperRegular';
    font-size: 1vw;
    box-shadow: 2px 2px 3px 3px rgba(127, 127, 127, .2);;
    border-radius: 20px;
    color: white;
    background-image: linear-gradient(to left,#ff6200,#FF8E47);
    margin: auto;
    border: 0;
    height: 8vh;
    width: 10vw;
}
`
