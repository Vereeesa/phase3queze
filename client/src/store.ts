import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { topicReducer } from './features/Game/redux/reducer';
import { userReducer } from './features/User/redux/userReducer';

const rootReducer = combineReducers({
    topicReducer,
    userReducer,
  });

  // создаём стор (наше хранилище данных)
  export const store = createStore(rootReducer, composeWithDevTools());

  /* Какой тип будет у функции store.getState -> тот и будет типа RootStateType */
  export type RootStateType = ReturnType<typeof store.getState>;
