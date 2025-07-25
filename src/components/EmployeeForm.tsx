import { useState } from "react";
import Employee from "../model/employee";
import { _createEmployee, _getAllEmployee, _updatEmployee } from "../service/employeeService";
import { AxiosResponse } from "axios";

const EmployeeForm = (props: {
    currentEmployee: Employee,
    setCurrentEmployee: Function
    setEmployeeCreatedOrUpdated: Function
}) => {

    const { currentEmployee, setCurrentEmployee,
        setEmployeeCreatedOrUpdated
    } = props

    const handleChange = (elementValue: React.ChangeEvent<HTMLInputElement>) => {
        console.log('We are in handleChange() function');
        console.log(elementValue);

        const { name, value } = elementValue.target

        console.log(name, ' ', value);

        setCurrentEmployee({
            ...currentEmployee,
            [name]: value
        })
    }

    const saveEmployee = () => {
        console.log(currentEmployee);
        // === is used to check the values and type
        if (currentEmployee.id === '') {
            createEmployee()
        } else {
            updateEmployee()
        }
    }

    const createEmployee = async () => {
        let employeeId = await getMaxId().then((result: number) => {
            console.log(result);
            return result + 1
        })

        console.log('After Max Id', employeeId);

        currentEmployee.id = String(employeeId)
        console.log(currentEmployee);
        // Execute create function from service
        _createEmployee(currentEmployee).then((response: AxiosResponse) => {
            console.log(response);
            if (response.status === 201) {
                setEmployeeCreatedOrUpdated(true)
                clearForm()
            }
        })
    }

    const updateEmployee = () => {
        _updatEmployee(currentEmployee).then((response: AxiosResponse) => {
            console.log(response);
            if (response.status === 200) {
                setEmployeeCreatedOrUpdated(true)
                clearForm()
            }
        })
    }

    const getMaxId = (): Promise<number> => {
        return new Promise((resolve) => {
            _getAllEmployee().then((result: AxiosResponse) => {
                let allEmployee: Employee[] = result.data
                let allEmployeeId: number[] = allEmployee.map((employee: Employee) => {
                    return Number(employee.id)
                })
                console.log(allEmployeeId);
                let maxId: number = Math.max(...allEmployeeId)
                console.log(maxId);
                resolve(maxId)
            })
        })
    }

    const clearForm = () => {
        setCurrentEmployee({
            id: '',
            firstName: '',
            lastName: '',
            designation: '',
            salary: '',
            age: '',
            city: ''
        })
    }

    return (
        <div>
            {/* Remove w-50 class from input element */}
            <input
                className="form-control mb-3"
                placeholder="First Name"
                name="firstName"
                value={currentEmployee.firstName}
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />
            <input className="form-control mb-3"
                placeholder="Last Name"
                value={currentEmployee.lastName}
                name="lastName"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />
            <input className="form-control mb-3"
                placeholder="Designation"
                value={currentEmployee.designation}
                name="designation"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />
            <input className="form-control mb-3" placeholder="City"
                value={currentEmployee.city}
                name="city"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />
            <input className="form-control mb-3" placeholder="Salary"
                value={currentEmployee.salary}
                name="salary"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />
            <input className="form-control mb-3" placeholder="Age"
                value={currentEmployee.age}
                name="age"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChange(value)}
            />

            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-outline-primary w-100"
                        onClick={() => saveEmployee()}>
                        SAVE
                    </button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-outline-secondary w-100"
                        onClick={() => clearForm()}>
                        CLEAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;
