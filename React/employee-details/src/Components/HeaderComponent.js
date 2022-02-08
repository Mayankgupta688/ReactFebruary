export default function HeaderComponent(props) {

    debugger;

    // Pros are Contants

    //props.empAge = 100;

    props.empName = "Anshul Gupta";

    props.empDesignation = "Manager";

    return (
        <div>
            <h1>Hello {props.employeeDetails.empName}</h1>
            <h2>User Age is: {props.empAge}</h2>
        </div>
    )
}