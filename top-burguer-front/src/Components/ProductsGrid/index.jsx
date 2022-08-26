import { TextField } from './styles'
import { motion } from 'framer-motion'

export const ProductGrid = () => {
    return (
        <div className='mainDiv'>
            <TextField>
                <motion.div
                className='headerText'
                >
                    <motion.h1  
                        className='primaryText'                     
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Nossos produtos
                    </motion.h1>

                    <motion.h6
                        className='secondaryText'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Basta clicar em um produto e fazer o seu pedido
                    </motion.h6>
                </motion.div>
            
            </TextField>
        </div>)
}

export default ProductGrid;