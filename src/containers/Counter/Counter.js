import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 99" clicked={this.props.onAddCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT',
            val: 1
        }),
        onDecrementCounter: () => dispatch({
            type: 'DECREMENT',
            val: -2
        }),
        onAddCounter: () => dispatch({
            type: 'ADD',
            val: 9
        }),
        onEraseCounter: () => dispatch({
            type: 'ERASE',
            val: 0
        }),
        onStoreResult: () => dispatch({
            type: 'STORE_RESULT'
        }),
        onDeleteResult: (id) => dispatch({
            type: 'DELETE_RESULT',
            resultedId: id
        }),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);