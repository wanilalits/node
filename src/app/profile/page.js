'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import profile from '@/app/profile/profile.module.css';


function Profile() {
    const router = useRouter();
    const [data1, setData1] = useState('')
    const [data, setData] = useState('')
    const [apidata, setApiata] = useState({"username":"", "password":"", "_id": "67221e1df5585e4d8c379add", "sensor": "not connected", "sw": "","btn": "","msg": ""})
      
    useEffect(() => {
        console.log('Component mounted');
        let value = localStorage.getItem("value");
        value = JSON.parse(value)
     
        setData1(value.data[1])//
        return () => {
            console.log('Component unmounted');
        };
    }, []);


    useEffect(() => {
        
        const interval = setInterval(() => {
          getData()
        }, 7000);
        //Clearing the interval0
        return () => clearInterval(interval);
  
    }, [data]);


    const getData =async()=>{
        try{
            let response = await fetch(window.location.origin+'/api/esp',{
            method : 'POST',
       body: JSON.stringify({"_id": "67221e1df5585e4d8c379add", "btn":apidata.btn, 'msg': apidata.msg})
       //body: JSON.stringify(apidata)

            });
          
            if (response.status===200){
                response = await response.json()
              
             
             setData ({"_id": "67221e1df5585e4d8c379add"})
             setApiata(response.position)
            
            }
            
           
       
        }
        catch(error)
        {
        
        }
      
 
        
    }

    const oneLogout = async (e) => {
        let response = await fetch(window.location.origin+'/api/users/profile');

       if (response.status === 200) {
        router.push('./login')
        response = await response.json()
    }

}


const oninput = (e)=>
{ 
    apidata.btn=e
 
   
}
const ontext = (e)=>{

    apidata.msg= e.target.value
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
            <label className={profile.dashboardlabel1}>{apidata.sensor}</label>
            <label className={profile.dashboardlabel2} style={{backgroundColor: apidata.sw}}></label>
            </div>
            <div className={profile.dashboardBox2}>
            <input className={profile.dashboardInput} onChange={(e) => (ontext(e))} type="text" autoComplete='off' name="password" placeholder="Password" ></input>
            <button className={profile.dashboardbtn1} onClick={(e) => (oninput('on'))} >ON</button>
            <button className={profile.dashboardbtn2} onClick={(e) => (oninput('off'))}>OFF</button>
          </div>
          

            </div>
            </div>
        </>
    );
}
export default Profile;

//style={{transform: 'translate(-50%,'+(250-(data*5) )+'px) ',height: data*5+'px', transition: 'transform 1s, height  1s' } }  