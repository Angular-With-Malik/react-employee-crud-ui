import axios, { AxiosResponse } from 'axios'
import Employee from '../model/employee'

const url: string = 'http://localhost:3000/employees'

export const _getAllEmployee = (): Promise<AxiosResponse> => {  // Function Signature
    return axios.get(url)
}

export const _createEmployee = (employee: Employee): Promise<AxiosResponse> => {
    return axios.post(url, employee)
}
