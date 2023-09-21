import React from "react";

const Listitems=(props)=>{
    const clickHandler2 = (propsid) =>{
        document.getElementById(propsid).remove();
        localStorage.removeItem(propsid);
    };
    return(
        <li id={props.items.id}>{props.items.price}-{props.items.catagory}-{props.items.name}
        <button onClick={()=>clickHandler2(props.items.id)}>Delete</button>
        </li>
    )
}

export default Listitems;