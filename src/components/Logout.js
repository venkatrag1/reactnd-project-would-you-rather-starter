import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

class Logout extends React.Component {

    componentDidMount() {
        this.props.dispatch(setAuthedUser(''));
    }

    render() {
        return (
            <Redirect to='/login' />
        );
    }
}

export default connect()(Logout);
