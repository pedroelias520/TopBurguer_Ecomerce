import { useState } from "react";
import { motion } from 'framer-motion'
import 'boxicons'

import { HeaderStyled, Logo, Hamburguer, NavStyled, Content } from "./styles";



export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderStyled>
    <Content>
      <Logo
        initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 80
        }}
      >        
      </Logo>

      <NavStyled show={showMenu}>
        <motion.li 
        whileHover={{scale: 1.2}}
        initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.1
        }}><a href="#about">Fazer Pedido</a></motion.li>

        <motion.li
        whileHover={{scale: 1.2}}
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.2
        }}><a href="#experiences">Sobre Nós</a></motion.li>

        <motion.li
        whileHover={{scale: 1.2}}
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.3
        }}><a href="#projects">Contatos</a></motion.li>
        <motion.li
        className="loginButton"
         whileHover={{scale: 1.2}}
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.4
        }}><a href="#contact">Login</a><box-icon name='log-in-circle' color="#ffffff"></box-icon></motion.li>
      </NavStyled>

      <Hamburguer onClick={toogleMenu}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </Hamburguer>
      
    </Content>
  </HeaderStyled>
  )
}

export default Header;