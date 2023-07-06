import axios from 'axios';

const BASE_URL: string = 'https://tasty.p.rapidapi.com'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
})



// import axios from 'axios';

// const options = {
//     method: 'GET',
//     url: 'https://tasty.p.rapidapi.com/recipes/list',
//     params: {
//         from: '0',
//         size: '20',
//         tags: 'under_30_minutes'
//     },
//     headers: {
//         'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
//         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }