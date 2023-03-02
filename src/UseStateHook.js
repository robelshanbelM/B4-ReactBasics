import React from 'react'
import { useState } from 'react';


 function UseStateHook() {
  
  
//   let counter=0;

  const [counter , setCounter]=useState(0); 
  const [status ,setStatus]=useState("like");
  

  let incerment= () => {

  
   setCounter(counter+1);

    console.log(counter);

  }

  
  let decrment= () => {

  
    setCounter(counter-1);
 
     console.log(counter);
 
   } 
  
  return (
    <div>

  <h3>useStateHook</h3>
  <p>Example 1</p>

    {counter} &nbsp;

    <button onClick={() => { incerment () } }> + </button> &nbsp;

    <button onClick={ () => { decrment() } }>- </button> &nbsp;

    <p> Example 2 </p>
    
    <button onClick={ ()=>{ setStatus("like")  }  }> Like </button>
    
    <button   onClick={ ()=>{ setStatus("Share")  }  }> Share </button>
  
    <button  onClick={ ()=>{ setStatus("Comment")  }  }> Comment </button>
    <br/>
    <br/>
     
     {status}

    
    </div>
  )
}

export default UseStateHook;