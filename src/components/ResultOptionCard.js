import React, { Component} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'

class ResultOptionCard extends Component {

  render() {
    const { optionText, voteCount, totalVoteCount, selected } = this.props;
    const pct = (100 * voteCount / totalVoteCount)| 0;
    const border = selected ? 'primary' : 'light';
    return (
      <Card border={border} className='container'>
        <Card.Title> Would you rather {optionText} ? </Card.Title>
        <Card.Body>
          <ProgressBar now={pct} label={`${pct}%`}/>
          <Card.Text> {voteCount} out of {totalVoteCount} votes </Card.Text>
        </Card.Body>
      </Card>
    )
  }

}

export default ResultOptionCard;
