import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

class Navigate extends Component {
  render() {
    const {userName, userAvatarURL} = this.props;
    return (
      <Nav fill variant="tabs" onSelect={(selectedKey) => this.props.history.push(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey='/'>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/add'>
            Add Question
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/leaderboard'>
            Leaderboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='greeting' disabled>
            Hello, {userName}
            <Image src={userAvatarURL} className='avatar' roundedCircle/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/logout'>
            Logout
          </Nav.Link>
        </Nav.Item>
        </Nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    userName: users[authedUser].name,
    userAvatarURL: users[authedUser].avatarURL,
  };
}

export default withRouter(connect(mapStateToProps)(Navigate));
