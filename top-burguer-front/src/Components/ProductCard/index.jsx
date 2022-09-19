import { Card} from './styles'
import { motion } from 'framer-motion'
import productImage from '../../Images/Burguer.png';

export const ProductCard = ({product}) => {
    return (
        <div className='mainDiv'>
            <Card>
                <motion.div className='imageDiv'>
                    <img src={product.img} />
                </motion.div>
                
                <motion.div className='textDiv'>
                    <motion.h3
                        className='nameProductText'
                    >
                        {product.name}
                    </motion.h3>

                    <motion.h3
                        className='descriptionProductText'
                    >
                        {product.description}
                    </motion.h3>
                </motion.div>

                <motion.button
                    className='shopButton'
                >
                    <div className='iconText'><a>Pedir</a></div>
                </motion.button>

                <motion.h1 className='priceText'>
                    {product.price}
                </motion.h1>
            </Card>
        </div>)
}

export default ProductCard;