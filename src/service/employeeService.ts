import axios, { AxiosResponse } from 'axios'

export const _getAllEmployee = (): Promise<AxiosResponse> => {  // Function Signature
    return axios.get('http://localhost:3000/employees')
}
