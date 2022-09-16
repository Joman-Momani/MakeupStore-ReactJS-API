import axios from 'axios';
import { useEffect ,useState } from 'react';

const { createContext } = require("react");
export let Mediacontext = createContext([]);

export function MediacontextProvider(props){
    let [product,Setproduct]= useState([]);
    let [jew,setyjew]=useState([]);
    let[women,setwomen]=useState([]);
 

    async function getproduct(pro,set){
        let {data}= await axios.get(`https://fakestoreapi.com/products/category/${pro}`);
        set(data);
        }

    useEffect(()=>{
            getproduct("men's%20clothing",Setproduct);
            getproduct("jewelery",setyjew);
            getproduct("women's%20clothing",setwomen);

     },[]);
   
    
    return <Mediacontext.Provider 
    value={{product,women,jew}}>
      {props.children}
    </Mediacontext.Provider>
}