import  {useState, useEffect} from "react";
import Axios from "axios";
import EmployeeDetailComponent from "./EmployeeDetailComponent.js"

export default function EmployeeComponent(props) {
    debugger;
    var [employeeDetails, setEmployeeDetails] = useState({});

    useEffect(() => {
        debugger
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login/" + props.match.params.employeeId).then((response) => {
            debugger;
            setEmployeeDetails(response.data)
        })
    })

    return <EmployeeDetailComponent {...employeeDetails}></EmployeeDetailComponent>
}