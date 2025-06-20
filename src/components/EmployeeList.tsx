import { useEffect, useState } from "react";
import Employee from "../model/employee";
import { _getAllEmployee } from "../service/employeeService";
import { AxiosResponse } from "axios";

const EmployeeList = () => {

    const [allEmployee, setAllEmployee] = useState<Employee[]>([])

    useEffect(() => {
        console.log('Hello Employee List');
        _getAllEmployee().then((response: AxiosResponse) => { 
            console.log(response.data);
            setAllEmployee(response.data)
        })
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Designation</th>
                    <th>City</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmployee.map((employee: Employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.city}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.age}</td>
                            <td>
                                <a className="text-primary">
                                    <i className="bi bi-pen-fill"></i>
                                </a>
                                <a className="m-3 text-danger">
                                    <i className="bi bi-trash-fill"></i>
                                </a>
                                <a className="text-secondary">
                                    <i className="bi bi-eye-fill"></i>
                                </a>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default EmployeeList;
