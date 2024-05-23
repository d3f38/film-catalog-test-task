import axios from 'axios'

import { OMDB_API } from './const'

export const axiosClient = axios.create({
    baseURL: OMDB_API,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
