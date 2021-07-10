import {useState, useEffect} from 'react'
import { getCards } from '../helpers/getCards'

export const useFetchCards = (setType, energyType ) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect(() => {
        getCards(setType, energyType).then(imgs => setState({
            data: imgs,
            loading: false
        }))
    }, [setType, energyType])


    return state;
}
