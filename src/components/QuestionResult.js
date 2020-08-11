import React, { Component} from 'react'
import { connect } from 'react-redux'
import ResultOption from './ResultOption';

class QuestionResult extends Component {

    state = {
        answer: '',
    }

  render() {
    const { authorName, authorAvatarURL, options, totalVoteCount } = this.props;
    console.log(options);
    const { answer } = this.state;
    return (
      <div className='card'>
      <h5 className='card-header'>Asked by {authorName}</h5>
      <img src={authorAvatarURL} />
      <h3> Results: </h3>
      <ul className='bulletfree-list'>
      {Object.keys(options).map((option) => (
        <li key={option}>
        <ResultOption key={option} optionText={options[option].text} voteCount={options[option].votes.length} totalVoteCount={totalVoteCount}/>
        </li>
      ))}
      </ul>
      </div>
    )
  }

}

function mapStateToProps({ authedUser, users, questions }, {qid}) {
  const question = questions[qid];
  const author = users[question.author];
  const options = { optionOne: question.optionOne, optionTwo: question.optionTwo }
  const totalVoteCount = question.optionOne.votes.length + question.optionTwo.votes.length;
  return {
    authedUser,
    authorName: author.name,
    authorAvatarURL: author.avatarURL,
    options,
    totalVoteCount
  }
}

export default connect(mapStateToProps)(QuestionResult)
