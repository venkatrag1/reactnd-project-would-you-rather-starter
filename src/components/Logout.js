import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {

    componentDidMount() {
        this.props.dispatch(setAuthedUser(''))
    }


    render() {
        return (
            <Redirect to='/login' />
        )
    }
}

export default connect()(Logout)
