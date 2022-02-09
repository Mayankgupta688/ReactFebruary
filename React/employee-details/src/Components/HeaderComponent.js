export default function HeaderComponent(props) {

    debugger;

    // Props are read Only, Do not try to modify

    props.empName = "Anshul Gupta";

    props.empDesignation = "Manager";

    return (
        <div>
            <h1>Hello {props.employeeDetails.empName}</h1>
            <h2>User Age is: {props.empAge}</h2>
        </div>
    )
}