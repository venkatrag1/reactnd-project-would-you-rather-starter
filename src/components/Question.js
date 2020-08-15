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
    const { answered, qid  } = this.props;
    return (
        <Fragment>
            {answered === true
            ? <QuestionViewResult qid={qid}/>
            : <QuestionAnswer qid={qid} />
            }
        </Fragment>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { qid } = props.match.params;
  const question = questions[qid];
  const answered = users[authedUser].answers.hasOwnProperty(qid);

  return {
    qid,
    answered
  }
}

export default connect(mapStateToProps)(Question);
