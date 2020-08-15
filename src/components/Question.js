import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';

import QuestionViewResult from './QuestionViewResult';
import QuestionAnswer from './QuestionAnswer';
import NotFound from './NotFound';

class Question extends Component {

  render() {
    const { answered, qid  } = this.props;
    return (
        <Fragment>
            { answered === undefined
            ? <NotFound />
            : (answered === true
                ? <QuestionViewResult qid={qid}/>
                : <QuestionAnswer qid={qid} />
                )
            }
        </Fragment>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { qid } = props.match.params; // Extract qid from url match params and set it in props
  const question = questions[qid] || undefined;
  const answered = question ? users[authedUser].answers.hasOwnProperty(qid) : undefined;

  return {
    qid,
    answered
  };
}

export default connect(mapStateToProps)(Question);
