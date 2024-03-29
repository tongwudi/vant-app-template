import axios from "axios"

export const service = axios.create({
    baseURL: BASEURL, // ①预定义
    timeout: 1000 * 5
})

service.interceptors.request.use(
    config => {
        // config.headers.Authorization = window.sessionStorage.getItem('token')
        // config.baseURL = process.env.VUE_APP_API_URL // ②根据条件定义
        return config
    },
    error => Promise.reject(error) //返回错误信息
)

service.interceptors.response.use(
    res => {
        res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    },
    error => {
        const err = errorHandle(error)

        const { response, message } = err
        return Promise.reject(response || message); //返回错误信息
    }
)

export const get = service.get
export const post = service.post

// 响应错误码处理
const errorHandle = (error) => {
    switch (error?.response?.status) {
        case 400:
            error.message = '请求错误'
            break
        case 401:
            error.message = '未授权，请登录'
            break
        case 403:
            error.message = '拒绝访问'
            break
        case 404:
            error.message = '未找到访问地址'
            break
        case 408:
            error.message = '请求超时'
            break
        case 500:
            error.message = '服务器内部错误'
            break
        case 501:
            error.message = '服务未实现'
            break
        case 502:
            error.message = '网关错误'
            break
        case 503:
            error.message = '服务不可用'
            break
        case 504:
            error.message = '网关超时'
            break
        case 505:
            error.message = 'HTTP版本不受支持'
            break
        default:
            error.message = '服务器正在开小差，请稍候'
            break
    }
    return error
}
