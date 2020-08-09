import React, { Component} from 'react'
import { connect } from 'react-redux'

class OptionStatCard extends Component {

  render() {
    const { optionText, voteCount, totalVoteCount } = this.props;

    return (
      <div className='card'>
        <h4> Would you rather {optionText} ? </h4>
      </div>
    )
  }

}

export default OptionStatCard;
