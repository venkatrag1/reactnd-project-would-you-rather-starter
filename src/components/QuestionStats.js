import React, { Component} from 'react'
import { connect } from 'react-redux'

class QuestionStats extends Component {

    state = {
        answer: '',
    }

  handleSubmit = (e) => {
      e.preventDefault();
        const { dispatch, qid } = this.props;
        const { answer } = this.state;

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
        <li key={option}>
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

export default connect(mapStateToProps)(QuestionStats)
