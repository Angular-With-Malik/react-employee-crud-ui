import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./shared/template/Footer";
import Header from "./shared/template/Header";
import './app.css'
import { useState } from "react";
import Employee from "./model/employee";

const App = () => {

  const [currentEmployee, setCurrentEmployee] = useState<Employee>({
    id: '',
    firstName: '',
    lastName: '',
    designation: '',
    salary: '',
    age: '',
    city: ''
  })

  const [isEmployeeCreatedOrUpdated, setEmployeeCreatedOrUpdated] =
    useState<boolean>(false)

  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div>
        {/* JSON.stringify - Used to convert object into string  */}
        {/* {JSON.stringify(currentEmployee)} */}
        {/* {JSON.stringify(isEmployeeCreatedOrUpdated)} */}
      </div>
      <div className="row mt-4 m-4">
        <div className="col-md-3">
          <EmployeeForm currentEmployee={currentEmployee}
            setCurrentEmployee={(data: Employee) => setCurrentEmployee(data)}
            setEmployeeCreatedOrUpdated={(flag: boolean) => setEmployeeCreatedOrUpdated(flag)} />
        </div>
        <div className="col-md-9">
          <EmployeeList
            setCurrentEmployee={(data: Employee) => setCurrentEmployee(data)}
            isEmployeeCreatedOrUpdated={isEmployeeCreatedOrUpdated}
            setEmployeeCreatedOrUpdated={(flag: boolean) => setEmployeeCreatedOrUpdated(flag)} />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;