import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveQuestions, addQuestion, answerQuestion } from '../actions/questions';
import { receiveUsers, addUserQuestion, answerUserQuestion } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const INITIAL_AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({questions, users}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(INITIAL_AUTHED_ID));
            dispatch(hideLoading());
        });
    };
}

export function handleQuestionAdd({optionOneText, optionTwoText, author}) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author})
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion({qid: question.id, authedUser: question.author}));
            dispatch(hideLoading());
        });
    };
}

export function handleQuestionAnswer({qid, answer}) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => {
            dispatch(answerQuestion({qid, answer, authedUser}));
            dispatch(answerUserQuestion({qid, answer, authedUser}));
            dispatch(hideLoading());
        });
    }
}
