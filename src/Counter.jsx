import React from "react";
import {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import "./Counter.css"
const Todolist=(()=>{
    const [num,setNum]=useState(0)
    function incNum(){
        setNum(num+1)
    }
    function decNum(){
        if(num>0){
            setNum(num-1);

        }else{
            alert("zero limit  Reached")
            setNum(0)
        }
    }
    
return(
<>
<div className="main">
    <div className="center">
        <h1>{num}</h1>
        <div className="btn">
        <button onClick={incNum}><AddIcon/></button>
        <button onClick={decNum}><RemoveIcon/></button>

        </div>
    </div>
</div>
</>


)
})
export default Todolist;