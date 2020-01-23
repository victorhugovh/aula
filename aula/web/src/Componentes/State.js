import React, {useState} from 'react';

// import { Container } from './styles';

export default function CompC() {
  
  let [conter,useConter] = useState(0)
  
  function Inc(){
    useConter(conter + 1)
  }
    return (
    <>
        <h1>Contador : {conter} </h1>
        <button onClick={Inc}>Incrementar</button>
    </>
  );
}
