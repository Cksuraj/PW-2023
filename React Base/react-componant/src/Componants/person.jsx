import React from "react";

const person=({name, age})=>{
   return(
       <div style={{display:'flex', gap:'50px', justifyContent:'center'}}>
        <p> Name: {name}</p>
        <p> Age :{age}</p>
       </div>
   )
}

export default person;
