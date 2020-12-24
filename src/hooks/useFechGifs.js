import {useEffect, useState} from 'react';
import { getGifs } from '../components/helpers/getGifs';

export const useFechGifs = (category) => {
   
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGifs(category)
            .then( imgs => {
                console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                })
            })

    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4,5],
    //         loading:false
    // })
    //     }, 3000);

    return state;
}
