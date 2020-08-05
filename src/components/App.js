import '../styles/App.css';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TestButton from './TestButton'
// import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
// import TweetPage from './TweetPage'
// import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null
              : <NewQuestion />}
          </div>
      </div>
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
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
