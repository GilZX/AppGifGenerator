


export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=JMJ9DD6LlpO5IkghDGe73X5feObTdLHD&q=${category}&limit=10`
    const resp=await fetch(url);
    const {data}=await resp.json();
    
    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.original.url
        }
    })
 
    return gifs; //Retornamos la promesa gifs

}