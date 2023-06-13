
export const intialState ={
    userName:'',
    age:0,
    cmp:''
}

const reducerFun=(state:any , action:any)=>{
switch (action.type) {
    case 'setUserName':
     console.log(action)   
        return {
            ... state,
           UserName :action.payload.newName
        }
        case 'setAge':
     console.log(action)   
        return {
            ... state,
           age :action.payload.newAge
        }
        case 'setCmp':
     console.log(action)   
        return {
            ... state,
           cmp :action.payload.newCmp
        }

    default:
        return state
}
};
export default reducerFun;