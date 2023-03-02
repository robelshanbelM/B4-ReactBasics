import React from 'react'


import { useEffect ,useState} from 'react';

import Axios from "axios" 
import axios from 'axios';


 function UseEffectHook() {

  const [location , setLoction]=useState("");


  useEffect( () => {


 fetch("http://localhost:8989/location").then( (response)=> response.json()).then((data)=>{

setLoction(data[0].mapLocation)


 console.log("api is called")

 })

  

  },[])

  return (
    <div>
        <p>UseEffectHook</p>
    
    
     {location}
         

          </div>
  )
}

export default UseEffectHook;