import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'

import QuestionViewResult from './QuestionViewResult';
import QuestionAnswer from './QuestionAnswer';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Question extends React.Component {

  render() {
    const { answered, qid, authorName, authorAvatarURL } = this.props;
    const title = (answered === true) ? `${authorName} asks` : `Asked by ${authorName}`
    return (
      <Card className='container'>
        <Card.Title className='card-header'>{title}</Card.Title>
        <Row>
          <Col md={4}>
            <Image src={authorAvatarURL} className='card-img center align-middle' roundedCircle/>
          </Col>
          <Col md={8}>
            {answered === true
            ? <QuestionViewResult qid={qid}/>
            : <QuestionAnswer qid={qid} />
            }
          </Col>
        </Row>
      </Card>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { qid } = props.match.params;
  const question = questions[qid];
  const author = users[question.author];
  const answered = users[authedUser].answers.hasOwnProperty(qid);

  return {
    qid,
    authorName: author.name,
    authorAvatarURL: author.avatarURL,
    answered
  }
}

export default connect(mapStateToProps)(Question)
