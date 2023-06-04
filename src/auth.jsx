import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";

export const Auth = () =>{
    const [Email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signin = ()=>{

    };

    return (
        <div>
            <input placeholder="Email..."onChange={(e)=>setEmail(e,target.value)}/>
            <input placeholder="password..."/>
            <button onClick={signin}>Sing in</button>
        </div>
    );
};