import React from 'react';




export const GifItemComponent=({id,title,url})=>{

    return(

        <>
      
        <div className='item'>
       
        <p>{title}</p>
        <img src={url}  alt='imagen'/>
        
        </div>
        </>
        
       

    )
}