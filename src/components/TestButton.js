import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion, handleQuestionAnswer } from '../actions/shared'

class TestButton extends Component {
  testAddQuestion = (e) => {
      e.preventDefault();
        const { dispatch, authedUser } = this.props;
        const q = { optionOneText: "Kalyanam", optionTwoText: "Odipolam", author: authedUser }
        dispatch(handleNewQuestion(q));

  }

  testAnswerQuestion = (e) => {
      e.preventDefault();
        const { dispatch, authedUser } = this.props;
        const a = { qid: "6ni6ok3ym7mf1p33lnez", answer: "optionOne" }
        dispatch(handleQuestionAnswer(a));

  }

  render() {
    return (
      <div>
      <form onSubmit={this.testAddQuestion}>
      <button type='submit' >Test Add Question</button>
      </form>
      <form onSubmit={this.testAnswerQuestion}>
      <button type='submit' >Test Answer Question</button>
      </form>
      </div>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(TestButton)
