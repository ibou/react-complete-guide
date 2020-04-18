import React from 'react'
import './Cockpit.css'

const cockpit = (props) => {

    let btnClass = '';
    const assignedClasses = [];

    if (props.showPersons) {
        btnClass = 'Red';
    }
    if (props.persons.length <= 2) {
        assignedClasses.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold'); // classes = ['red', 'bold']
    }


    btnClass = 'Red';

    return (
        <div className="Cockpit">
            <h1>Hi, {props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={() => props.toggle()}
            >
                Toggle Persons
        </button>
        </div>
    )
}
export default cockpit;