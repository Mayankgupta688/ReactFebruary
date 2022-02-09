// ANy Component that can take Component is Input Pramameter or can return a component out of it

function higherOrderComponent(SampleComponent) {
    var employeeData = {
        userName: "Mayank",
        userAge: 10,
        userSalary: 10
    }

    function getData() {
        return "Hell All, this is value from Common Function"
    }

    return function(props) {
        debugger
        return (
            <div>
                <h1>This is an Example of Higher Order Components</h1>
                <SampleComponent></SampleComponent>

                <h4>{getData()}</h4>
                <h2>Empoyee Name is: {employeeData.userName}</h2>
                <h3>This part is Common between two Components</h3>
            </div>
        )
    }
}

function ManagerComponent() {
    return <h1>I am a Manager</h1>;
}

function DirectorComponent() {
    return (
        <div>
            <h1>I am a Director</h1>
            <h2>I am working with 100+ Employee</h2>
        </div>
    )
}

var NewComponent = higherOrderComponent(ManagerComponent);
export default NewComponent;