import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = 'https://tasty.p.rapidapi.com'

interface AxiosParams {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    // baseUrl?: string;
    params: {
        from?: string | number;
        size?: string | number
        recipe_id?: string | number
        id?: string | number
    },
    data?: object
}

const Client = async ({ url, method, params, data }: AxiosParams) => {
    try {
        const resp: AxiosResponse = await axios({
            method,
            url,
            baseURL: BASE_URL,
            params,
            headers: {
                'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            },
            data: data && JSON.stringify(data)
        })
        if (resp.status === 200 || resp.status === 201) {
            return resp.data
        }
    } catch (error: any) {
        throw new Error(error.message || 'error handling request')
    }
}

export default Client;