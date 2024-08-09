import { commonApi } from "./commonApi"

const BASEURL='https://poc-restaurant-api.icodebdev.com'

export  const LoginAPI =async(datas)=>{
    return await commonApi("POST",`${BASEURL}/authenticate`,datas,"")

 }