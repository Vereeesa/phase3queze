import { GameStateType } from './GameStateType';
import { GameActionType } from './GameActionType';

export const initialState: GameStateType = { topics: [] };

export const topicReducer = (
  state: GameStateType = initialState,
  action: GameActionType
): GameStateType => {
  switch (action.type) {
    case 'topic/load':
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
};
