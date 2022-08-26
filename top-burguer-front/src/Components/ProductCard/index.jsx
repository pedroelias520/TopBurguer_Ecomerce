import { Card, TextField } from './styles'
import { motion } from 'framer-motion'
import productImage from '../../Images/Burguer.png';

export const ProductCard = ({imageCard, nameCard, descriptionCard, priceCard}) => {
    return (
        <div className='mainDiv'>
            <Card>
                <motion.div className='imageDiv'>
                    <img src={productImage} />
                </motion.div>
                
                <motion.div className='textDiv'>
                    <motion.h3
                        className='nameProductText'
                    >
                        Hamburguer com cheddar e fritas
                    </motion.h3>

                    <motion.h3
                        className='descriptionProductText'
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </motion.h3>
                </motion.div>

                <motion.button
                    className='shopButton'
                >
                    <div className='iconText'><a>Pedir</a></div>
                </motion.button>

                <motion.h1 className='priceText'>
                    14.99 R$
                </motion.h1>
            </Card>
        </div>)
}

export default ProductCard;