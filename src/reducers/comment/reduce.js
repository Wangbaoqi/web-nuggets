// action type 
const INITCOMMENT = 'INITCOMMENT'
const ADDCOMMENT = 'ADDCOMMENT'
const DELETECOMMENT = 'DELETECOMMENT'


export default function(state, action) {
  if(!state) {
    return { commentList: [] }
  }

  switch (action.type) {
    case INITCOMMENT:
      return { commentList: action.commentList }
    case ADDCOMMENT:
      return { commentList: [...state.commentList, ...action.commentList] }

    case DELETECOMMENT:
      return { commentList: [
          ...state.commentList.slice(0, action.commentIndex),
          ...state.commentList.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state;
  }
}


// action creators

export const initComment = (comment) => {
  return { type: INITCOMMENT, commentList: comment } 
}

export const addComment = (comment) => {
  return { type: ADDCOMMENT, commentList: comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETECOMMENT, commentIndex: commentIndex }
}