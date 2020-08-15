import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Nav from 'react-bootstrap/Nav'

import QuestionPreview from './QuestionPreview'

class QuestionDashboard extends Component {

    state = {
        selectedTab: 'unanswered'
    }

    render() {
        const {qids} = this.props;
        const {selectedTab} = this.state;
        return (
            <Card className='container'>
                <Card.Header>
                    <Nav fill variant="tabs" onSelect={(selectedTab) => this.setState(() => ({selectedTab}))}>
                        <Nav.Item>
                            <Nav.Link eventKey='unanswered'>
                                Unanswered Questions
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='answered'>
                                Answered Questions
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
            <Card.Body>
                <h3 className='center'>Your timeline</h3>
                <ul className='dashboard-list'>
                    {qids[selectedTab].map( qid => {
                    return (
                        <li key={qid}>
                            <QuestionPreview qid={qid} />
                        </li>
                    )}
                    )}
                </ul>
            </Card.Body>
            </Card>
        );
    }

}

function mapStateToProps({ authedUser, questions, users }) {
    const sorted_qids = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    return {
        qids: {
            answered: sorted_qids.filter(qid => users[authedUser].answers.hasOwnProperty(qid)),
            unanswered: sorted_qids.filter(qid => !users[authedUser].answers.hasOwnProperty(qid))
        }
    };
}

export default connect(mapStateToProps)(QuestionDashboard);
