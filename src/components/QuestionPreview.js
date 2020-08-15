import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import withQuestionCard from './QuestionCard';

class QuestionPreview extends Component {


  handleViewPoll = (e) => {
    e.preventDefault();
    const { qid } = this.props;
    this.props.history.push(`/questions/${qid}`)
  }

  render() {
    const { options } = this.props;
    const optionIDList = Object.keys(options);
    return (
      <Card.Body>
        <Card.Title>Would you rather ...</Card.Title>
        {optionIDList.map((option, i) => (
            <div key={option}>
                <Row key={option}>
                    <Card.Text>{options[option]}</Card.Text>
                </Row>
                {i !== optionIDList.length-1 && (
                <Row key={i}>
                    <Card.Text className='text-muted'>OR</Card.Text>
                </Row>
                )}
            </div>
        ))}
        <Button variant="info" type='submit' onClick={this.handleViewPoll}>View Poll</Button>
      </Card.Body>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, {qid}) {
  const question = questions[qid];
  const options = { optionOne: question.optionOne.text, optionTwo: question.optionTwo.text }
  return {
    options
  }
}

export default withQuestionCard(withRouter(connect(mapStateToProps)(QuestionPreview)));
