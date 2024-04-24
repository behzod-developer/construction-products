import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { product_get } from '../../API_URL'
import ProductUi from './ProductUi'
// container component
// representaional 
function Product() {

    const [productDatas, useProductDatas] = useState([])



    useEffect(() => {
        async function fetchData() {
            try {
                const data_api = await axios.get(product_get)
                useProductDatas(data_api.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    console.log(productDatas)
const isSuccess=true;
    return (
        <div className='product'>
            {isSuccess && <ProductUi products={productDatas}/>}
           
        </div>
    )
}

export default Product