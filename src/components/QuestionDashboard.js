import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import QuestionPreview from './QuestionPreview'

class QuestionDashboard extends Component {

    render() {
        const {questions, users} = this.props;
        return (
            <div>
                <h3 className='center'>Your timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.qids.map( qid => {
                    return (
                        <li key={qid}>
                            <QuestionPreview qid={qid} />
                        </li>
                    )}
                    )}
                </ul>
            </div>
        );
    }

}

function mapStateToProps({ questions, users }) {
    return {
        qids: ['vthrdm985a262al8qx3do', '6ni6ok3ym7mf1p33lnez', '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
        questions,
        users
    };
}

export default connect(mapStateToProps)(QuestionDashboard);
