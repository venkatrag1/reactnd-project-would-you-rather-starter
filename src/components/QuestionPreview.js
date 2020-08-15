import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleQuestionAdd } from '../actions/shared'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ResultOptionCard from './ResultOptionCard'

import insideQuestionCard from './QuestionCard';

class QuestionPreview extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

  handleSubmit = (e) => {
      e.preventDefault();
        const { dispatch, authedUser } = this.props;

        dispatch(handleQuestionAdd({
            author: authedUser,
            ...this.state,
        }));

        this.setState(() => (
            {
                optionOneText: '',
                optionTwoText: ''
            }
        ))

        this.props.history.push('/');

  }

  handleInputChange = (e) => {
      const option = e.target.name;
      const optionText = e.target.value;
      this.setState(() => ({
          [option]: optionText
      }));
  }

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
  const author = users[question.author];
  const options = { optionOne: question.optionOne, optionTwo: question.optionTwo }
  const totalVoteCount = question.optionOne.votes.length + question.optionTwo.votes.length;
  const userOption = users[authedUser].answers[qid];

  return {
    authedUser,
    authorName: author.name,
    authorAvatarURL: author.avatarURL,
    options,
    totalVoteCount,
    userOption
  }
}

export default connect(mapStateToProps)(insideQuestionCard(QuestionPreview))
