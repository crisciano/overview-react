import axios from 'axios'

import { api, GET_SABORES, ADD_SABORES, UPDATE_SABORES, DELETE_SABORES } from '../const'

const get = async () => (
    await axios(api, {
        method: "post",
        headers: { "Content-Type": "application/json"},
        data: JSON.stringify({ query: GET_SABORES })
    })
    .then(res => res.data)
    .then(res => res.data)
)

const add = async variables => (
    await axios(api, {
        method: "post",
        headers: { 
            'Content-Type': 'application/json' 
        },
        data: {
            query: variables.id === undefined ? ADD_SABORES: UPDATE_SABORES,
            variables
        }

    })
    .then(res => res.data)
    .then(res => res.data.addSabor)
)


const del = id => {
    console.log(id)
    return axios(api, {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json' 
        },
        data: {
            query: DELETE_SABORES,
            variables: { id }
        }
    })
}

export default {
    get,
    add,
    del
}