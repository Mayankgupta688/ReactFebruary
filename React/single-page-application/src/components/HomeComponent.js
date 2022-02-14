import  {useState, useEffect} from "react";
import Axios from "axios";
import EmployeeDetailComponent from "./EmployeeDetailComponent";

export default function HomeComponent(props) {
    debugger;
    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            setEmployeeList(response.data)
        })
    })

    return (
        <div>
            {employeeList.map((employee) => {
                return <EmployeeDetailComponent {...props} {...employee}></EmployeeDetailComponent>
            })}
        </div>
    )
}