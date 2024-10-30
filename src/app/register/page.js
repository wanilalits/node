'use client'
import React from 'react';
import { useState } from 'react';
import login from '@/app/login/login.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Register(props) {
    const [data, setData] = useState({ name: '', username: '', password: '' })

    const [message, setMssage] = useState("")
    const router = useRouter();
    const onchangevalue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const  onregister = async (e) => {
        
        if (! data.name  || ! data.username  || ! data.password  )
             {
              setMssage('fill all data')
            return;
        }
        else
        {
        setMssage('')
        console.log(data)
        try{
            let response = await fetch('http://localhost:3000/api/users/register',{
                method : 'POST',
              body: JSON.stringify(data)
            
            });
            response = await response.json();
           
           
        }
        catch(error)
        {
        
        }

        
        router.push('./login')
    }
 
    } 

    return (
        <>
            <div className={login.box}>
                
                <label className={login.title}>Register</label>
                <label className={login.label3}>Name</label>
                <input className={login.textBox} id='1' type="text" autoComplete="off" name="name" placeholder="name" onChange={(e) => onchangevalue(e)} ></input>
                <label className={login.label3}>User Id</label>
                <input className={login.textBox} id='3' type="text" autoComplete="off" name="username" placeholder="ID" onChange={(e) => onchangevalue(e)}></input>
                <label className={login.label3}>Password</label>
                <input className={login.textBox} id='2' type="text" autoComplete='off' name="password" placeholder="Password" onChange={(e) => onchangevalue(e)}></input>
                <button className={login.button} onClick={(e) => (onregister(e))}>&nbsp; Register &nbsp;</button> <br></br>
               
               <label className={login.lebel2}>Already have an account?</label> <Link className={login.link} href="/login"> Login</Link>
           <br></br>
                {message}
            </div>
        </>
    );
}

export default Register;