import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import userReducer from './reducers/user'
import todoReducer from './reducers/todo'
import visibleFilterReducer from './reducers/visibleFilter'

const rootReducer = combineReducers({
  userInfo: userReducer,
  todos: todoReducer,
  visibleFilter: visibleFilterReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger() // 一个很便捷的 middleware，用来打印 action 日志
  )
)

export default store
