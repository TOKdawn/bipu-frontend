export function convertQueryString(params) {
    let str = '?'
    for (const item in params) {
        if (params[item] || params[item] === 0) {
            str += `${item}=${params[item]}&`
        }
    }
    str = str.substring(0, str.length - 1)
    return encodeURI(str)
}

export default {

}
