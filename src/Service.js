import axios from 'axios'

export const getImageList = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos/?_limit=45`)
    
}

