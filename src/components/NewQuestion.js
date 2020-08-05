import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

  handleSubmit = (e) => {
      e.preventDefault();
        const { dispatch, authedUser } = this.props;

        dispatch(handleNewQuestion({
            author: authedUser,
            ...this.state,
        }));

  }

  handleInputChange = (e) => {
      const option = e.target.name;
      const optionText = e.target.value;
      this.setState(() => ({
          [option]: optionText
      }));
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <div>
      <h3>Create New Question</h3>
      <h5>Complete the question</h5>
      <h4>Would you rather ...</h4>
      <form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
      {options.map((option, i) => {
          const placeholder = `Enter ${(option.charAt(0).toUpperCase() + option.slice(1)).replace(/([a-z0-9])([A-Z])/g, '$1 $2')} Here`;
          return (
        <div>
            <input name={option} key={option} placeholder={placeholder}/>
            {i !== options.length-1 && <h3>OR</h3>}
          </div>);
      })}
      <button type='submit' disabled={Object.values(this.state).some((optionText) => optionText === '')}>Submit</button>
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

export default connect(mapStateToProps)(NewQuestion)
