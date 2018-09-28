import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import todoReducer from './reducers/todo'
import visibleFilterReducer from './reducers/visibleFilter'

const reducer = combineReducers({
  userInfo: userReducer,
  todos: todoReducer,
  visibleFilter: visibleFilterReducer
})

const store = createStore(reducer)

export default store
