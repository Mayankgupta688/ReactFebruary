import React, { useEffect } from "react";
import EmplyeeDetails from "./EmployeeDetails";
import Axios from "axios";

export default function EmployeeListComponent() {
    var [employeeList, setEmployeeList] = React.useState([]);

    useEffect(() => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            setEmployeeList(response.data)
        })
    }, []);

    var deleteEmployee = (employeeId) => {
        var newList = employeeList.filter((employee) => {
            return employee.id != employeeId;
        })

        setEmployeeList(newList)
    }

    return (
        <div>
            <h1>Employee List for TechnoFunnel is given below: </h1>
            {employeeList.map((employee) => {
                return (
                    <EmplyeeDetails {...employee} key={employee.id} deleteEmployee={deleteEmployee}></EmplyeeDetails>
                )
            })}
        </div>
    )
}