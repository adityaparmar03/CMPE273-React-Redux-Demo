import axios from 'axios';
import {Load} from '../action_creators/index';

export default function fetchMenu() {
    
       return  dispatch => {
          axios.get("http://localhost:3000/")
             .then((res)=>{
                 const data = res.data.map(food => {
                     return food
                 });
                 dispatch(Load(data))
             });
         }
         
     }

     
      