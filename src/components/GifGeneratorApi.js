import React,{useState,useEffect} from 'react';
import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItemComponent } from './GifItem';

export const GifGeneratorApiComponent=({category})=>{


    const [images, setImages] = useState([]);
    const {loading} =useFetchGifs()

    



   //Ejecuta el componenente use solo la primera ves que lo ejecuta getGifs()
    useEffect(() => {
      getGifs(category).then(imgs=>setImages(imgs));
    
    }, [category]);
    
    




   
    
   
    return(
        <>
        <p>{loading?"Cargando":"Datos Cargados"}</p>
        <div className='card-grid'>
        <h3>{category}</h3>
       
        {
            /*images.map(gif=>{
                return  <li key={gif.id} > {gif.title}</li>
            })*/

            images.map(img=>{
                return <GifItemComponent key={img.id} {...img} />
            })
            

        }
        </div>
        
       
        </>


    )
}

