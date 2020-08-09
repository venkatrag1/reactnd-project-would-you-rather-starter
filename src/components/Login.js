import React, { Component} from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends React.Component {
  handleAuthedUser = event => {
    const { from } = this.props.location.state || {
      from: { pathname: '/' }
    };
    const id = event.target.value;
    /* If redirected here from a different route, get that route else set from to / */
    this.props.dispatch(setAuthedUser(id)); // Login
    this.props.history.push(from); // Redirect to from after setting authedUser
  };

  render() {
    const { users } = this.props;
    const userIds = Object.keys(users);

    return (
      <div>
        <h2>Welcome to the Would You Rather App</h2>
        <h3>Please Sign In to Continue</h3>
        <h4>Sign In</h4>
        <select onChange={this.handleAuthedUser} value="select">
        <option value="select" disabled>Select..</option>
        {userIds.map(user => (
          <option key={user} value={user}>{users[user].name}</option>
        ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
