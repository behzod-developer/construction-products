import React, { useEffect, useState } from 'react'
import AllProductUi from './AllProductUi'
import axios from 'axios';
import { product_get } from '../../API_URL';

function AllProduct() {


    const isSuccess = true;
    const [allProductDate, setAllProductDate] = useState([])

    useEffect(() => {
        async function fetchDate() {
            try {
                const get_date = await axios.get(product_get)
                setAllProductDate(get_date?.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchDate()
    },[])

    console.log(allProductDate)
    
    return (
        <div className='all-product'>
            {isSuccess && <AllProductUi products={allProductDate} />}
        </div>
    )
}

export default AllProduct