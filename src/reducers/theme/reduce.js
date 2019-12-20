
const THEMECOLOR = 'INITCOMMENT'



export default function reducer(state, action) {
  if(!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case THEMECOLOR:
      return { ...state, themeColor: action.themeColor}
    default:
      return state
  }
}



export const changeTheme = (color) => {
  return { type: THEMECOLOR, themeColor: color}
}