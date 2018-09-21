import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import todoReducer from './reducers/todo'

const reducer = combineReducers({
  userInfo: userReducer,
  todos: todoReducer
})

const store = createStore(reducer)

export default store
