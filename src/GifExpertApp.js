import React, { useState } from 'react';
import { GifGeneratorApiComponent } from './components/GifGeneratorApi';
import { InputCategoryValueComponent } from './components/InputCategoyValue';



export const GifExpertAppComponent=()=>{

const [categories, setcategories] = useState(['Dragon Ball Z']);

/*const addNewCategory=(category)=>{

    setcategories(['New Category',...categories]);
}*/

return(

    <>
        <h2>GifExpertAppGenerator</h2>
        <InputCategoryValueComponent  setcategories={setcategories}/ >
        <hr/>
        
        <ol>
            {
                categories.map(category =>(<GifGeneratorApiComponent key= {category} category={category}/>

                    //return <li key={category}>{category} </li>
                ))
            }
            

        </ol>



    </>
   
)


}