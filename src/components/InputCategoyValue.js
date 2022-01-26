import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const InputCategoryValueComponent=({setcategories})=>{

    const [inputValue, setinputValue] = useState('Buscar-GIFS');

    const changeValue=(evento)=>{
        setinputValue(evento.target.value);
    }

    const submitValue=(e)=>{

        e.preventDefault();
        if(inputValue.trim().length>2){
            setcategories(categories=>[inputValue,...categories]);
            
        }
       

    }


    return(
        <>
        <h2>Busqueda: {inputValue}</h2>
        <form onSubmit={submitValue}>  
            
            <input type="text" value={inputValue} onChange={changeValue}/>    

        </form>
       
        
        
        </>



    )



}

InputCategoryValueComponent.propTypes={
    setcategories:PropTypes.func.isRequired
}