import React, { Component} from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'

class ResultOption extends Component {

  render() {
    const { optionText, voteCount, totalVoteCount } = this.props;
    const pct = (100 * voteCount / totalVoteCount)| 0;
    return (
      <div className='card'>
        <h4> Would you rather {optionText} ? </h4>
        <div>
        <ProgressBar now={pct} label={`${pct}%`}/>
        </div>
        <p> {voteCount} out of {totalVoteCount} votes </p>
      </div>
    )
  }

}

export default ResultOption;
