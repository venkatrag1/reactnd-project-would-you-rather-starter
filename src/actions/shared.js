import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = '';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({questions, users}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        });
    };
}
