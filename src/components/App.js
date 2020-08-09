import '../styles/App.css';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TestButton from './TestButton'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
// import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionStats from './QuestionStats';
import OptionStatCard from './OptionStatCard';
// import TweetPage from './TweetPage'
// import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;
    const loading = (authedUser === null);
    return (
      <Router>
        <Fragment>
          <LoadingBar />
              <div className='container'>
                {loading === true
                  ? null
                  //: <NewQuestion />}
                  //: <QuestionStats qid='6ni6ok3ym7mf1p33lnez'/>}
                  : (
                    <Fragment>
                      <div></div>
                      <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/" component={NewQuestion} authedUser={authedUser} />
                      </Switch>
                    </Fragment>
                  )
                  }
              </div>
          </Fragment>
      </Router>
      // <Router>
      //   <Fragment>
      //    <LoadingBar />
      //     <div className='container'>
      //       <Nav />
      //       {this.props.loading === true
      //         ? null
      //         : <div>
      //             <Route path='/' exact component={Dashboard} />
      //             <Route path='/tweet/:id' component={TweetPage} />
      //             <Route path='/new' component={NewTweet} />
      //           </div>}
      //     </div>
      //   </Fragment>
      // </Router>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
