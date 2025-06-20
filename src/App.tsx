import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./shared/template/Footer";
import Header from "./shared/template/Header";
import './app.css'

const App = () => {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="row mt-4 m-4">
        <div className="col-md-3">
          <EmployeeForm />
        </div>
        <div className="col-md-9">
          <EmployeeList />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;