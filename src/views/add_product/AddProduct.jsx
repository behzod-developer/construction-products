import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'
import { product_api } from '../../API_URL';
import axios from 'axios';

function AddProduct() {
    const navigate = useNavigate()
    const [rasmFile,setRasmFile]=useState("")

    function CloseBtn(){
        navigate('/')
    }
    const handleupload=event=>{
        setRasmFile(event.target.files[0])
    }

    const addProductHandler = e=> {
        e.preventDefault()
        const forma = new FormData(e.target)
        const formValues=Object.fromEntries(forma.entries())
        // 4ta 
       


        // code for photo

        const formData=new FormData();
        for(let [key,value] of Object.entries(formValues)){
            formData.append(key,value)
        }
        formData.append("image",rasmFile)
        
        
        async function AddProducts(){
            try{
                const prod = await axios.post(product_api,formValues)
                navigate('/')
                console.log(formValues)
            }
            catch(err){
                console.log(err)
            }

        }
        AddProducts()
    }

    return (
        <div className='add-product-form'>
            <button onClick={CloseBtn} className='close-btn'><IoClose /></button>
            <form onSubmit={addProductHandler} action="">
                <input required  type="text" name='user_name' placeholder='your name' />
                <input required type="text" name='name' placeholder='product name' />
                <input required type="tel" name='phone' placeholder='phone number' />
                <input required type="number" name='price' placeholder='product price' />
                <input required type="text" name='description' placeholder='product description' className='product-add-description'  />
                <input required onChange={handleupload}  accept='*/image' type="file" placeholder='picture product' />
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct