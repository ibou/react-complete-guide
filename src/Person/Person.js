
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div` 
    width: 60%;
    margin: 16px auto;
    border: solid 1px #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center; 

 @media(min-width: 500px){ 
        width: 450px;
        color: #DCC6F2 
} 
`;

const Person = (props) => { 
 
    return (
        <StyledDiv> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> 
        </StyledDiv> 
    )
}

export default Person;