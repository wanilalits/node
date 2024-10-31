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
        setData1(value.data[1])//
        return () => {
            console.log('Component unmounted');
        };
    }, []);


    const oneLogout = async (e) => {
        let response = await fetch(window.location.origin+'/api/users/profile');

       if (response.status === 200) { console.log('sucess') 
        router.push('./login')
        response = await response.json()
    }

}

    return (
        <>


            <div className={profile.profile}  >
             
                <div className={profile.profile1} onClick={(e) => (oneLogout(e))}  >  </div>
                <div className={profile.profileName} >Welcome {data1} </div>
            </div>
<div>
            <h3>in The Profile Page</h3>
            
            <button onClick={(e) => (oneLogout(e))}>&nbsp; LogOut &nbsp;</button>  &nbsp;
<br></br> <br></br>
            <div className={profile.dashboardBox}>
            <div className={profile.dashboardBox1}>
            <label className={profile.dashboardlabel1}></label>
            <label className={profile.dashboardlabel2}></label>
            </div>
            <div className={profile.dashboardBox2}>
            <input className={profile.dashboardInput} ></input>
            <button className={profile.dashboardbtn1} >ON</button>
            <button className={profile.dashboardbtn2} >OFF</button>
          </div>
          

            </div>
            </div>
        </>
    );
}
export default Profile;

//