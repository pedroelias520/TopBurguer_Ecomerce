
import React from 'react';
import { motion } from 'framer-motion'
import hamb from '../../Images/Lottie/hamburger.json';
import { TextField, GlobalStyle, ImageStyle} from './styles'


export const About = () => {
    return (
        <div>
            <GlobalStyle></GlobalStyle>
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
            </TextField>

            <ImageStyle

                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 3,
                    delay: 1.5
                }}>
                <Image
                    
                />
            </ImageStyle>

        </div>
    )
}

export default About;