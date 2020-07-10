import axios from "axios"
// import qs from 'qs'
import { BASEURL, errorHandle } from "./env"


export default (options) => {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: BASEURL,
            timeout: 5000
        })

        instance.interceptors.request.use(
            config => {
                // if (config.method == 'post') {
                //     config.data = qs.stringify(config.data)
                // }

                // config.headers.Authorization = window.sessionStorage.getItem('token')
                return config
            },
            error => Promise.reject(error) //返回错误信息
        )

        instance.interceptors.response.use(
            res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
            error => {
                const { response } = error
                if (response) {
                    errorHandle(response.status, response.message)
                    return Promise.reject(response); //返回错误信息
                } else {
                    console.log('断网了');
                }
            }
        )

        instance(options)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}