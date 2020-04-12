
import React from 'react';


const Person = (props) => { 

    return (
        <div>
            <p> Hi, my name is <strong>{props.name}</strong> and I'm <strong>{props.age} years old</strong> </p>
            <p>   {props.children}  </p>
            
        </div> 
    )
}

export default Person;