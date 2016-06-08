export default function selectedList (state = "Wine", action = {}) {
	console.log(action.type)
  switch (action.type){
    case 'NEW_SELECTED_LIST':
      return action.listTitle
    default: 
      return state
  }
}