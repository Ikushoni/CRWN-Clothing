import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
