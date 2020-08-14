import '../styles/App.css';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TestButton from './TestButton'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
// import Dashboard from './Dashboard'
import QuestionAdd from './QuestionAdd'
import QuestionResult from './QuestionResult';
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
                  //: <NewQuestion />}
                  //: <QuestionStats qid='6ni6ok3ym7mf1p33lnez'/>}
                  : (
                    <Fragment>
                      <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/add" exact component={QuestionAdd} authedUser={authedUser} />
                        <ProtectedRoute path="/" exact component={() => <QuestionResult qid='6ni6ok3ym7mf1p33lnez'/>} authedUser={authedUser} />
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
