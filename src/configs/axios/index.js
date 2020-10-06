import axios from "axios"

import errorResponseHandler from "./errorResponseHandler"

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
})

instance.interceptors.response.use(
  (response) => response, // return respon jika   sukses
  errorResponseHandler // return reject atau eror jika gagal dan lansung jalankan fungsi errorResponseHandler
)

export default instance
