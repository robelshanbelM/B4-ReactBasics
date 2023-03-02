import React from 'react'

import { useReducer } from 'react';

  
  const reducer= (state, action ) =>{

    switch( action.type ){

     case "like" :
            return {counter : state.counter=10 ,status: state.status="like" , post : state.post="image changed"  };
     case "share" :
            return {counter : state.counter=20 ,status: state.status="share" , post : state.post="image with frineds changed" }; 
     case "comment" :
            return {counter : state.counter=20 ,status: state.status="comment" , post : state.post="image  with family changed"  };

    default :
     return state;
    }


  }

 function UseReducerHook() {

   
    const [state ,dispatch] = useReducer(reducer, ({ counter: 1, status:"share" , post: "profile image change"   }));
    



  return (
    <div>
        <p>UseReducerHook</p>
        <h3>Example 1 </h3>
        {state.counter} &nbsp; {state.status } &nbsp;  {state.post } &nbsp;
       


        <button  onClick={ () =>{  dispatch ({ type: "share"}) } }> show my status </button>

    </div>
  )
}

export default UseReducerHook;