'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import profile from '@/app/profile/profile.module.css';

function Profile() {
    const router = useRouter();
    const [data1, setData1] = useState('')

    useEffect(() => {
        console.log('Component mounted');
        let value = localStorage.getItem("value");
        value = JSON.parse(value)
        console.log(value)
        setData1(value.data[0])//
        return () => {
            console.log('Component unmounted');
        };
    }, []);


    const oneLogout = async (e) => {
        let response = await fetch('http://192.168.43.239:3000/api/users/profile');
    
        if (response.status === 200) { console.log('sucess') }
        router.push('./login')
        response = await response.json()
    }

    return (
        <>


            <div className={profile.profile}  >
             
                <div className={profile.profile1} onClick={(e) => (oneLogout(e))}  >  </div>
                <div className={profile.profileName} > {data1} </div>
            </div>
<div>
            <p>in Profile Page</p>
            
            <button onClick={(e) => (oneLogout(e))}>&nbsp; LogOut &nbsp;</button>  &nbsp;
            </div>
        </>
    );
}
export default Profile;

//