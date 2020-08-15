import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'
import { withRouter } from 'react-router-dom'

import withQuestionCard from './QuestionCard';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class QuestionAnswer extends Component {

  state = {
      answer: '',
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const { dispatch, qid } = this.props;
      const { answer } = this.state;

      dispatch(handleQuestionAnswer({
          qid,
          answer
      }));

      this.props.history.push(`/questions/${qid}`)

  }

  handleInputChange = (e) => {
      const answer = e.target.value;
      this.setState(() => ({
          answer,
      }));
  }

  render() {
    const { authorName, authorAvatarURL, options } = this.props;
    const { answer } = this.state;
    return (
      <Card.Body>
        <Card.Title>Would you rather ...</Card.Title>
        <Form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
          {Object.keys(options).map((option) => (
            <Form.Row key={option}>
              <Form.Check type="radio" key={option} name="answer" value={option} label={options[option]}/>
            </Form.Row>
          ))}
        <Button variant="primary" type='submit' disabled={answer === ''}>Submit</Button>
        </Form>
      </Card.Body>

    )
  }

}

function mapStateToProps({ questions }, {qid}) {
  const question = questions[qid];
  const options = { optionOne: question.optionOne.text, optionTwo: question.optionTwo.text }
  return {
    options
  }
}

export default withQuestionCard(withRouter(connect(mapStateToProps)(QuestionAnswer)));
