import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleQuestionAdd } from '../actions/shared'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class QuestionAdd extends Component {

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
    const options = Object.keys(this.state);

    return (
      <Card className='container'>
      <Card.Title className='card-header center'>Create New Question</Card.Title>
      <Card.Body>
        <Card.Text className='text-muted'>Complete the question</Card.Text>
        <Card.Text>Would you rather ...</Card.Text>
        <Form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
        {options.map((option, i) => {
            const placeholder = `Enter ${(option.charAt(0).toUpperCase() + option.slice(1)).replace(/([a-z0-9])([A-Z])/g, '$1 $2')} Here`;
            return (
              <Form.Group key={option}>
                  <Form.Control type='input' name={option} key={option} placeholder={placeholder}/>
                  {i !== options.length-1 && <Form.Text className='text-muted'>OR</Form.Text>}
            </Form.Group>);
        })}
        <Button variant="primary" type='submit' disabled={Object.values(this.state).some((optionText) => optionText === '')}>Submit</Button>
        </Form>
      </Card.Body>
      </Card>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionAdd)
