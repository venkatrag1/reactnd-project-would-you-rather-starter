import React, { Component} from 'react'
import { connect } from 'react-redux'
import ResultOptionCard from './ResultOptionCard';

import withQuestionCard from './QuestionCard';

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
            <ResultOptionCard
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
  const options = { optionOne: question.optionOne, optionTwo: question.optionTwo }
  const totalVoteCount = question.optionOne.votes.length + question.optionTwo.votes.length;
  const userOption = users[authedUser].answers[qid];

  return {
    options,
    totalVoteCount,
    userOption
  }
}

export default withQuestionCard(connect(mapStateToProps)(QuestionViewResult));
