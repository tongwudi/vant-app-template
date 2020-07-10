const BASEURL = process.env.NODE_ENV == "development" ? '/api' : '/api'

const errorHandle = (status, msg) => {
    switch (status) {
        case 400:
            msg = '1111'
            break
        default:
            break
    }
}

export {
    BASEURL,
    errorHandle
}