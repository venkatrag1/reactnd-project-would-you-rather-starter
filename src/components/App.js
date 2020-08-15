import '../styles/App.css';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'
import QuestionDashboard from './QuestionDashboard'
import LeaderBoard from './LeaderBoard'
import Question from './Question'
import QuestionAdd from './QuestionAdd';
import NotFound from './NotFound'
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
                        <ProtectedRoute path="/questions/:qid" component={(props) => <Question {...props}/>} authedUser={authedUser} />
                        <ProtectedRoute exact path="/add" component={QuestionAdd} authedUser={authedUser} />
                        <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} authedUser={authedUser} />
                        <ProtectedRoute exact path="/" component={QuestionDashboard} authedUser={authedUser} />
                        <Route component={NotFound}/>
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
