import { useState } from "react";
import Employee from "../model/employee";

const EmployeeForm = () => {

    const [currentEmployee, setCurrentEmployee] = useState<Employee>({
        id: '',
        firstName: '',
        lastName: '',
        designation: '',
        salary: '',
        age: '',
        city: ''
    })

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
                    <button className="btn btn-outline-secondary w-100">CLEAR</button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;
