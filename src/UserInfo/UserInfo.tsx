import { useEffect, useReducer, useState } from "react";
import reducerFun, { intialState } from "../component/store/reducerFun";
import { type } from "os";
import DialogCmp from "../component/DialogCmp/DialogCmp";
import ReactDOM from "react-dom";
import { setTimeout } from "timers/promises";

const UserInfo = () => {
const [divContent,setDivContent]=useState<any>();
const loadDialog = ()=>{
    setDivContent(<div><p>test portal 24</p></div>)

}

  useEffect(()=>{
loadDialog();
  },[])
const[state , dispatch]=useReducer(reducerFun , intialState)
 
const submitdata=()=>{
    console.log(state);
}
const renderId:any=document.getElementById("Dialog");

const DialogRender=ReactDOM.createPortal(divContent,renderId)

const userDispatchFun=(newName:any)=>{
    dispatch({type:'setUserName', payload:newName})
}

const userDispatchFun1=(newAge:any)=>{
    dispatch({type:'setUserAge', payload:newAge})
}

const userDispatchFun2=(newCmp:any)=>{
    if (state.userName===newCmp) {
        alert('company name can not be same as userName')
    }
    dispatch({type:'setUserCmp', payload:newCmp})
}


return (
    <div>
      {DialogRender}
    {<DialogCmp ></DialogCmp>}
<br></br>  
    <h1>user info</h1><br></br>
      username
      <input
        type="text"
        name="UserName"
        placeholder="enter the user name"
        onChange={e=>userDispatchFun(e.target.value)}
      value={state.userName}
      
      ></input>
      <br></br>
      Age
      <input
        type="number"
        name="age"
        placeholder="enter the age of user"
        onChange={e=>userDispatchFun1(e.target.value)}
      value={state.age}
      ></input>
      <br></br>
      Company
      <input
        type="text"
        name="cmp"
        placeholder="enter the name of company"
        onChange={e=>userDispatchFun2(e.target.value)}
        value={state.cmp}
      ></input>
      <br></br>
      <button type="button" onClick={submitdata}>submit</button>
    </div>
  );
};

export default UserInfo;
