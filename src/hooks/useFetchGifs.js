import { useState } from "react"
//Custom Hook ejemplo que regresa un estado que en este caso es un objeto con dos valores o estados iniciales

export const useFetchGifs=()=>{
const [state, setState] = useState({
    data:[],
    loading:true

});

setTimeout(()=>{
    setState({
        data:[],
        loading:false
    })
},3000)


return state;


}