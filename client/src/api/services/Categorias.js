import axios from 'axios'

import { api, GET_CATEGORIAS, ADD_CATEGORIA, UPDATE_CATEGORIA, DELETE_CATEGORIA } from '../const'

const get = async () => (
    await axios(api, {
        method: "post",
        headers: { "Content-Type": "application/json"},
        data: JSON.stringify({ query: GET_CATEGORIAS })
    })
    .then(res => res.data)
    .then(res => res.data)
)

const add = async variables => (
    await axios(api, {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        data: {
            query: variables.id === undefined ? ADD_CATEGORIA : UPDATE_CATEGORIA ,
            variables
        }

    })
    .then(res => res.data)
    .then(res => res.data.addCategoria)
)

const del = id => {
    return axios(api, {
        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        data: {
            query: DELETE_CATEGORIA,
            variables: { id }
        }
    })
}


export default {
    get,
    add,
    del
}