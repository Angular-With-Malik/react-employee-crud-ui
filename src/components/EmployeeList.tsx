import { useEffect, useState } from "react";
import Employee from "../model/employee";
import { _deleteEmployeeById, _getAllEmployee } from "../service/employeeService";
import { AxiosResponse } from "axios";

const EmployeeList = (props: {
    setCurrentEmployee: Function,
    isEmployeeCreatedOrUpdated: boolean,
    setEmployeeCreatedOrUpdated: Function
}) => {

    const { setCurrentEmployee, isEmployeeCreatedOrUpdated,
        setEmployeeCreatedOrUpdated
    } = props

    const [allEmployee, setAllEmployee] = useState<Employee[]>([])

    useEffect(() => {
        console.log('Hello Employee List');
        getAllEmployee()
    }, [isEmployeeCreatedOrUpdated])

    const getAllEmployee = () => {
        _getAllEmployee().then((response: AxiosResponse) => {
            console.log(response.data);
            setAllEmployee(response.data);
            setEmployeeCreatedOrUpdated(false)
        })
    }

    const deleteEmployeeById = (employeeId: string) => {
        console.log(employeeId);
        _deleteEmployeeById(employeeId).then((response: AxiosResponse) => {
            console.log(response);
            if (response.status === 200) {
                getAllEmployee()
            }
        })
    }

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
                                <a className="text-primary"
                                    onClick={() => setCurrentEmployee(employee)}>
                                    <i className="bi bi-pen-fill"></i>
                                </a>
                                <a className="m-3 text-danger"
                                    onClick={() => deleteEmployeeById(employee.id)}>
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
