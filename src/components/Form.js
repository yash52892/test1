import React, {useState} from "react";

const Form=(props)=>{

    const[id, setId]=useState('');
    const[price, setPrice]=useState('');
    const[name, setName]=useState('');
    const[catagory, setCat]=useState('');

    const obj={
        id:id,
        price:price,
        name:name,
        catagory:catagory
    };

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.formdata(obj);
    }
    const collectId=(e)=>{
        e.preventDefault();
        setId(e.target.value);
    }
    const collectPrice=(e)=>{
        e.preventDefault();
        setPrice(e.target.value);
    }
    const collectName=(e)=>{
        e.preventDefault();
        setName(e.target.value);
    }
    const collectCat=(e)=>{
        e.preventDefault();
        setCat(e.target.value);
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='product_id'>Product ID: </label>
           <input type="number" value={id} onChange={collectId}></input>
           <label htmlFor='price'> Selling Price</label>
            <input type="number" value={price} onChange={collectPrice}></input>
            <label htmlFor='product_name'> Product Name: </label>
            <input type="text" value={name} onChange={collectName}></input>
            <label htmlFor='product_cat'> Product Caragory: </label>
            <select id="catagory" value={catagory} onChange={collectCat}>
                <option value="none">Select an Option</option>
                <option value="Food">Food</option>
                <option value="Electronics">Electronics</option>
                <option value="Skincare">Skincare</option>
            </select>
            <button type="sumit">Submit</button>
        </form>
    )
}
export default Form;