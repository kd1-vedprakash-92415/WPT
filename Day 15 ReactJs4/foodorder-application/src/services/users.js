import axios from "axios";
import { Base_URL } from "./config";

export async function findUserByCredentials(cred){
    const url=Base_URL+"/users/authenticate"

    const response= await axios.post(url,cred)
    if(response.status==='success'
        const error
    )
}