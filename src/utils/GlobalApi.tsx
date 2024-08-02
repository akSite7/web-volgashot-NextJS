const axios = require("axios");
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

const getInform = () => axiosClient.get('/informs?populate=*')
const getFraction = () => axiosClient.get('/fractions?populate=*')
const getBuckshot = () => axiosClient.get('/buckshots?populate=*')
const createOrder = (data: Record<string, any>) => axiosClient.post('/feedbacks', data)
const getOther = () => axiosClient.get('/others?populate=*')

export default {
  getInform,
  getFraction,
  getBuckshot,
  createOrder,
  getOther,
}