import { useEffect, useState } from 'react'
import ProductCard from '../ProductsGrid';
import {motion} from 'framer-motion'


export const ProductGrid = () => {
    /*
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("http://192.168.18.3:8080/products/all", {method:'GET'})
        .then(response => response.json())            
        .then(data => setData(data))
      },[]) 
      
            console.log(data);
      */
    return (
        <motion.div className='mainDiv'>
            
        </motion.div>)
}

export default ProductGrid;