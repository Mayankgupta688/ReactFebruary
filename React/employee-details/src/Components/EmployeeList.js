import employeeList from "../data/employeeList";
import EmployeeDetailComponent from "./EmployeeDetailComponent";

export default function EmployeeList() {

    function renderEmployeeDetails(employee) {
        return <EmployeeDetailComponent {...employee}></EmployeeDetailComponent>
    }

    return (
        <>
            <h1>The Employee List for TechnoFunnel is given Below:</h1><hr/>
            {employeeList.map(function(employee) {
                return renderEmployeeDetails(employee)
            })}
        </>
    )
}