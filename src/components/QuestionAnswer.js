import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'

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
      <div className='card'>
      <h5 className='card-header'>{authorName} asks:</h5>
      <h4>Would you rather ...</h4>
      <form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
      <img src={authorAvatarURL} />
      <ul className='bulletfree-list'>
      {Object.keys(options).map((option) => (
        <li>
        <input type="radio" key={option} name="answer" value={option} /> {options[option]}
        </li>
      ))}
      </ul>
      <button type='submit' disabled={answer === ''}>Submit</button>
      </form>
      </div>
    )
  }

}
//       <input type="radio" id="optionOne" name="answer" value="optionOne" /> {question.optionOne.text}
      //<input type="radio" id="optionTwo" name="answer" value="optionTwo" /> {question.optionTwo.text}

function mapStateToProps({ authedUser, users, questions }, {qid}) {
  const question = questions[qid];
  const author = users[question.author];
  const options = { optionOne: question.optionOne.text, optionTwo: question.optionTwo.text }
  return {
    authedUser,
    authorName: author.name,
    authorAvatarURL: author.avatarURL,
    options,
  }
}

export default connect(mapStateToProps)(QuestionAnswer)
