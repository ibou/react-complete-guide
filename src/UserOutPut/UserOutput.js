
import React from 'react'

const UserOutput = (props) => {
    const user = props;
    console.log("props ",user)
    return (
        <div>
            <p>Some random text !</p> 
            <p>
                <strong> {user.username}  </strong>  
            </p>
        </div>
    );
};
export default UserOutput