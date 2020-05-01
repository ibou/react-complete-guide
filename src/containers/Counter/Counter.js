import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                this.setState( ( prevState ) => { return { counter: prevState.counter } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.state.counter} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec',1 )}  />
                <CounterControl label="Add 3" clicked={() => this.counterChangedHandler( 'add', 3 )}  />
                <CounterControl label="Subtract 3" clicked={() => this.counterChangedHandler( 'sub', 3 )}  />
                <CounterControl label="Érase" clicked={() => this.setState({counter: 0})}  />
            </div>
        );
    }
}

export default Counter;