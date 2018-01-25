import API from './api'
import { convertQueryString } from './utils'

export default axios => ({
    async postDemo(params) {
        const { data } = await axios.post('/apiUrl', params)
        return data
    },
    async getDemo(params) {
        const { data } = await axios.post(`/apiUrl${convertQueryString(params)}`)
        return data
    },
})

export { API }
