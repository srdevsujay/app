import axios from "axios";
import baseUrl from "./auth.service";
import { getJwt } from '../utilities/localstorage.utility';


export const clientAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
})

export const setAccessToken = (token: string) =>
  (clientAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`)

