import React from 'react';
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = props => {

    const { onLogout } = props;
    useEffect(() => {
        onLogout();
    }, [onLogout])
    return <Redirect to='/' />;

}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);