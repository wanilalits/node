'use client'
import React from 'react';
import { useState } from 'react';
import login from '@/app/login/login.module.css'
 import Link from 'next/link';
import { useRouter } from 'next/navigation';



function Login (props) {
    const [data, setData] = useState({  username: '', password: '' })

    const [displaymessage, setDisplaymssage] = useState("")
    const router = useRouter();

    const onchangevalue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const  onLogin = async (e) => {
     let message ="";
        if ( (!data.username && (message = 'User Id') )  ||( !data.password && (message = 'password')) ){ 
            setDisplaymssage('Please Enter '+message)  
            return;
        }

        setDisplaymssage('Please Wait ...')  
        try{
            let response = await fetch(window.location.origin+'/api/users/login',{
            method : 'POST',
        body: JSON.stringify(data)
            
            });
        console.log(response)
            if (response.status===200){
                response = await response.json()
              localStorage.setItem("value", JSON.stringify(response))
              return  router.push('./profile')
             
            }
            
            setDisplaymssage('Please check user ID or password')
           
       
        }
        catch(error)
        {
        
        }
      
        
      
    
 
    } 

    return (
        <>
            <div className={login.box}>
                
                <label className={login.title}>Login</label>
                
                <label className={login.label3}>User Id</label>
                <input className={login.textBox} id='2' type="text" autoComplete="off" name="username" placeholder="ID" onChange={(e) => onchangevalue(e)}></input>
                <label className={login.label3}>Password</label>
                <input className={login.textBox} id='3' type="text" autoComplete='off' name="password" placeholder="Password" onChange={(e) => onchangevalue(e)}></input>
                <button className={login.button} onClick={(e) => (onLogin(e))}>&nbsp; Login &nbsp;</button> <br></br>
               
               <label className={login.lebel2}>Don't have an account?</label> <Link className={login.link} href="/register"> Sign Up</Link>
           <br></br>
           <div className={login.errorBox}>   {displaymessage}</div>
            </div>
        </>
    );
}

export default Login;
