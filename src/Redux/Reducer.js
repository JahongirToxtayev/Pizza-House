const initialState=[]

const Reducer=(state=initialState,action)=>{
switch (action.type) {
    case "ALL_DATA":
    return action.payload
        
        
    default:
    return state
        
}
}

export default Reducer
