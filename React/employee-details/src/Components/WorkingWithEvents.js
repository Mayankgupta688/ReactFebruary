import "./Index.css";

export default function EmployeeDetailComponent(props) {

    function buttonClicked() {
        alert("Hello All")
    }

    return (
        <div className="card" style={{width: "18rem", display: "inline-block", margin: "15px"}}>
            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <p className="card-text">{props.id}: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" className="btn btn-primary" value="Delete" onClick={buttonClicked} />
            </div>
        </div>
    )
}