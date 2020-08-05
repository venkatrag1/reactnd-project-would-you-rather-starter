import { RECEIVE_USERS, ADD_USER_QUESTION, ANSWER_USER_QUESTION } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION: {
            const { qid, authedUser } = action;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat(qid)
                },
            }
        }
        case ANSWER_USER_QUESTION: {
            const { qid, answer, authedUser } = action;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        }
        default:
            return state;
    }
}
