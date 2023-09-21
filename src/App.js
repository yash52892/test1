import React, { useState } from 'react';
import Form from './components/Form';
import Listitems from './components/Listitems';

const App = () => {
  const[n,setN]=useState('');
const formDHandler=(obj)=>{
  setN(obj);
  JSON.stringify(obj);
  localStorage.setItem(obj.id, JSON.stringify(obj));
  if(obj.catagory==='Food')
  setF(true)
  else if(obj.catagory==='Electronics')
  setE(true);
  else
  setS(true);
}
const[E,setE]=useState(false);
const[F,setF]=useState(false);
const[S,setS]=useState(false);

  return (
  <>
  <Form formdata={formDHandler}></Form>
  <h1>Products</h1>
  <div>
    <h2>Electronics Items</h2>
    { E && <Listitems items={n}/>}
    <h2>Food Items</h2>
    { F && <Listitems items={n}/>}
    <h2>Skincare Items</h2>
    { S && <Listitems items={n}/>}
  </div>
  </>
  )  
};

export default App;
