import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { topicReducer } from './features/Game/redux/reducer'


const rootReducer = combineReducers({
    topicReducer,
  });
  
  // создаём стор (наше хранилище данных)
  export const store = createStore(rootReducer, composeWithDevTools());
  
  /* Какой тип будет у функции store.getState -> тот и будет типа RootStateType */
  export type RootStateType = ReturnType<typeof store.getState>;