import React, { Component} from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'


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
        <Card className='center container'>
          <Card.Header>
            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
            <Card.Subtitle>Please Sign In to Continue</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>Sign In</Card.Text>
            <select onChange={this.handleAuthedUser} value="select">
            <option value="select" disabled>Select..</option>
            {userIds.map(user => (
              <option key={user} value={user}>{users[user].name}</option>
            ))}
            </select>
        </Card.Body>
        </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
