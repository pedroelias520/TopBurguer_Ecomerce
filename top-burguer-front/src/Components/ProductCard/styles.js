import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Jumper;
        src: url(../../../public/Fonts/Jumper-Regular.ttf);        
    }
    
`

export const Card = styled(motion.div) `    
    font-family: 'JumperThin';
    color: black;    
    display: flex;   
    background: white;
    border-radius: 10px;
    height: 30vw;
    width: 25vw;
    margin: 10px;    
    box-shadow: 2px 2px 5px 3px rgba(127, 127, 127, .2);
    display: grid;
    grid-row-gap:10px;    
    
    
    .imageDiv{
        border-radius: 10px 10px 0 0 ;        
        background-image: linear-gradient(to left,#ff6200, #ff8e47);
        height: 100%;
        grid-column: 1/3;
        grid-row;1/2;
    }

    img{        
        height: 15vw;        
    }

    .textDiv {      
        margin-top: 5px;
        margin-left: 15px;
        margin-right: 15px;        
        height: 15vh;        
        grid-column: 1/3;
        grid-row: 2;        
    }
    
    .nameProductText{
        text-align: justify;
        height: max-content;
        text-justify: inter-word;             
        font-family: 'BebasNue';
        font-size: 2.0vw;
        margin:0;     
        padding-bottom:10px;          
    }

    .descriptionProductText {        
        text-align: justify;
        text-justify: inter-word;        
        font-family: 'JumperThin';
        font-size: 0.8vw;        
        margin: 0;
    }

    .shopButton {               
        font-family: 'JumperRegular';        
        text-align: center;
        height: 50px;     
        margin-right:10px;           
        grid-column: 2;
        grid-row: 3;
        border: 0px;
        border-radius: 10px;
        background-image: linear-gradient(to left,#ff6200, #ff8e47);
        color: white;   
        display: flex;
        align-item: center;
        text-align: center;     

        .iconText {
            margin: auto;
            display: flex;
            text-align: center;                                    
            
            a {                 
                margin: auto;
                font-size: 1.0vw;
            }

            box-icon {                
                height: 20px;
            }
        }
    }

    .priceText{
        font-family: 'BebasNue';
        margin:auto;                
        grid-column:1;
        grid-row:3;
        font-size: 2.0vw;
    }

`