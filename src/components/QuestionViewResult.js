import React, { Component} from 'react'
import { connect } from 'react-redux'
import ResultOption from './ResultOption';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

class QuestionViewResult extends Component {

  render() {
    const { options, totalVoteCount, userOption } = this.props;
    return (
      <Card.Body>
        <Card.Title> Results: </Card.Title>
        {Object.keys(options).map((option) => (
          <Row key={option}>
            <ResultOption
              key={option}
              optionText={options[option].text}
              voteCount={options[option].votes.length}
              totalVoteCount={totalVoteCount}
              selected={option === userOption}/>
          </Row>
        ))}
      </Card.Body>
    )
  }

}

function mapStateToProps({ authedUser, users, questions }, {qid}) {
  const question = questions[qid];
  const author = users[question.author];
  const options = { optionOne: question.optionOne, optionTwo: question.optionTwo }
  const totalVoteCount = question.optionOne.votes.length + question.optionTwo.votes.length;
  const userOption = users[authedUser].answers[qid];

  return {
    options,
    totalVoteCount,
    userOption
  }
}

export default connect(mapStateToProps)(QuestionViewResult)
