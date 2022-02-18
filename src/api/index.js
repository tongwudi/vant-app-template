import { get, post} from 'utils/axios'

export default {
    // getMv: data => get('/personalized/mv' + data),
    getDeme: data => get('/demo', data),
    postDeme: data => post('/demo', data)
}
