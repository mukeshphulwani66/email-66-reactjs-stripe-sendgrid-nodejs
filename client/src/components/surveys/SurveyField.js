import React from 'react';

export default ({input :input,label:label,meta:{touched,error}})=>{
    return(
       <div>
        <label style={{fontSize:'20px',color:'white'}}>{label}</label>
        <input {...input} />
            <div 
            className="white-text #ff8a80 red accent-1"
            style={{borderRadius:'5px',paddingLeft:'10px',fontSize:'20px',marginBottom:'5px'}}
            >
            {touched && error}
            </div>
       </div> 
    )
}