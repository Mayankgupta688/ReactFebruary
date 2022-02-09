import "./Index.css";

export default function EmployeeDetailComponent(props) {

    function returnOddOrEven() {
        return props.id % 2 == 0 ? <h6>User Id is Even</h6>: <h6>User Id is Odd</h6>
    }

    var randomFunction = () => displayData(props.name, props.id)

    function getData(event) {
        debugger;
        alert("Delete Employee with Name: " + event.target.id)
        alert("Delete Employee with Id: " + event.target.name)
    }

    function displayData(userName, userId) {
        debugger;
        alert("Delete Employee with Name: " + userName)
        alert("Delete Employee with Id: " + userId)
    }
    
    return (
        <div className="card" style={{width: "18rem", display: "inline-block", margin: "15px"}}>
            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.id}: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input name={props.id} id={props.name} type="button" value="Delete" className="btn btn-primary" onClick={getData} />

                <input name={props.id} id={props.name} 
                    style={{marginLeft: "10px"}} type="button" 
                    value="Delete Employee" className="btn btn-primary" 
                    onClick={() => displayData(props.name, props.id)} />   
            </div>
        </div>
    )
}