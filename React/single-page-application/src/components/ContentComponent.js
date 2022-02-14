import { Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import HelpComponent from "./HelpComponent";
import EmployeeComponent from "./EmployeeComponent";

export default function ContentComponent() {

    return (
        <div style={{height: "700px", minWidth: "95%", border: "1px solid red", "marginTop": "15px", padding: "10px", overflow: "auto"}}>
            <h1>This is Content Component</h1>

            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/home" component={HomeComponent}></Route>
            <Route exact path="/employee/:employeeId" component={EmployeeComponent}></Route>
        </div>
    )
}
