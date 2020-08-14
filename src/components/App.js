import '../styles/App.css';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TestButton from './TestButton'
import Login from './Login'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'
// import Dashboard from './Dashboard'
import Question from './Question'
import QuestionAdd from './QuestionAdd';
// import TweetPage from './TweetPage'
import NavBar from './NavBar'
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
                  : (
                    <Fragment>
                      <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <ProtectedRoute exact path="/add" component={QuestionAdd} authedUser={authedUser} />
                        <ProtectedRoute path="/questions/:qid" component={(props) => <Question {...props}/>} authedUser={authedUser} />
                        <ProtectedRoute exact path="/" component={() => <div></div>} authedUser={authedUser} />
                      </Switch>
                    </Fragment>
                  )
                  }
              </div>
          </Fragment>
      </Router>

    )
  }
}

// <ProtectedRoute path="/" exact component={() => <QuestionViewResult qid='vthrdm985a262al8qx3do'/>} authedUser={authedUser} />


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
