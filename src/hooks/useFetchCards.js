import {useState, useEffect} from 'react'
import { getCards } from '../helpers/getCards'

export const useFetchCards = ( energyType ) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect(() => {
        getCards(energyType).then(imgs => setState({
            data: imgs,
            loading: false
        }))
    }, [energyType])


    return state;
}
