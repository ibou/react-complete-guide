import React, { PureComponent } from 'react';
import Person from "./Person/Person";
import withClass from '../../hoc/withClass'; 

class Persons extends PureComponent {

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', nextProps, nextState);
    return { message: 'Snapshot !' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

  render() {
    console.log('[Persons.js] rendering ...');
    return  this.props.persons.map((person, index) => {
      return (
        
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.props.clicked(index)}
            changed={event => this.props.changed(event, person.id)}
            isAuth={this.props.isAuthenticated}
          /> 
      );
      
      
    })
  }
}

export default withClass(Persons, "Persons");