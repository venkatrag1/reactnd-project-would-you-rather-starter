export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ANSWER_USER_QUESTION = 'ANSWER_USER_QUESTION';


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function addUserQuestion({qid, authedUser}) {
    return {
        type: ADD_USER_QUESTION,
        qid,
        authedUser,
    }
}

export function answerUserQuestion({qid, answer, authedUser}) {
    return {
        type: ANSWER_USER_QUESTION,
        qid,
        answer,
        authedUser,
    }
}
