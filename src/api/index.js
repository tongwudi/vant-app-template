import axios from 'utils/axios'

export const getMv = data => {
    return axios({
        type: 'get',
        url: '/personalized/mv',
        data
    })
}
