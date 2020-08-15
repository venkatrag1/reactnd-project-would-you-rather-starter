import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeaderCard from './LeaderCard'

class LeaderBoard extends Component {

    state = {
        selectedTab: 'unanswered'
    }

    render() {
        const {userList} = this.props;
        return (
            <ul className='dashboard-list'>
                {userList.map( user => {
                return (
                    <li key={user.uid}>
                        <LeaderCard {...user} />
                    </li>
                )}
                )}
            </ul>
        );
    }

}

function mapStateToProps({ authedUser, questions, users }) {
        const userList = Object.keys(users).map(uid => {
            const user = users[uid];
            return {
                uid: user.id,
                userName: user.name,
                userAvatarURL: user.avatarURL,
                numAnsweredQuestions: Object.keys(user.answers).length,
                numCreatedQuestions: user.questions.length,
                score: Object.keys(user.answers).length + user.questions.length
            }
        });
        return {
            userList: userList.sort((a,b) => b.score - a.score)
        }
}

export default connect(mapStateToProps)(LeaderBoard);
