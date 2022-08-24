
import React from 'react';
import { motion } from 'framer-motion'
import hamb from '../../Images/Burguer.png';

import { TextField, GlobalStyle, ImageStyle, MainDiv, ButtonDiv } from './styles'


export const About = () => {
    return (
        <div>
            <GlobalStyle></GlobalStyle>

            <MainDiv>
                <TextField>
                    <motion.h3
                        className='textTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        Olá, bem-vindo ao
                    </motion.h3>

                    <motion.h1
                        className='bigTextTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        Burguer Classic
                    </motion.h1>

                    <ButtonDiv>
                        <motion.button
                        className='buttonClick'
                        whileHover={{ scale: 1.1}}
                        whileTap={{scale: 0.8}}
                        initial = {{opacity: 0, scale: 0.5}}
                        animate = {{opacity: 1, scale: 1.0}}
                        transition = {{duration: 3.0, delay:0.5, ease : [0,1.0,0.2,1.01]}}                        
                        >
                            Fazer pedido
                        </motion.button>
                    </ButtonDiv>
                </TextField>

                <ImageStyle                    
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,                        
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,                        
                    }}>

                    <img
                        className='imageTitle'
                        src={hamb}
                        alt="Sem imagem"
                    />

                </ImageStyle>
            </MainDiv>
        </div>
    )
}

export default About;