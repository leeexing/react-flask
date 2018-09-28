const userState = {
  userInfo: {
    userName: '',
    avater: '',
    isAdmin: false,
    userType: 0
  },
  hasLogin: false,
  messageNum: 0
}

const userReducer = (state=userState, action) => {
  let {type} = action
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        hasLogin: action.hasLogin
      }
    case 'LOGOUT':
      return {
        ...state,
        hasLogin: action.hasLogin
      }
    default:
      return state
  }
}

export default userReducer

