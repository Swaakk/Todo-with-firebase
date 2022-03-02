import React, { useState } from 'react'
import {db} from "../Firebase"
import {collection,addDoc} from "firebase/firestore"
import "../Styles/AdTodo.css"

function AdTodo() {
    const[title,setTitle]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db, "todos"),{
                title,
                completed : false
            });
            setTitle("");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <input type="text" placeholder='Type your todo here' value={title} onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="btn_container">
                <button>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AdTodo