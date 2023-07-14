import { UserState } from "../types/UserState";
import { UserAction } from "../types/UserAction";

const initialState: UserState = {
  user: undefined,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "auth/reg":
      return {
        ...state,
        user: action.payload,
      };
    case "auth/log":
      return {
        ...state,
        user: action.payload,
      };
    case "auth/check":
      return {
        ...state,
        user: action.payload,
      };
    case "auth/logout":
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
};

export default userReducer;
