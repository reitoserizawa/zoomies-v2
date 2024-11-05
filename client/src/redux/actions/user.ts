import { UserState } from '../../interfaces/user';

export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

interface SetUserAction {
    type: typeof SET_USER;
    payload?: UserState;
}

interface UpdateUserAction {
    type: typeof UPDATE_USER;
    payload?: UserState;
}

interface SignInAction {
    type: typeof SIGN_IN;
    payload?: UserState;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
    payload?: UserState;
}

export type UserActionTypes = SetUserAction | UpdateUserAction | SignInAction | SignOutAction;
