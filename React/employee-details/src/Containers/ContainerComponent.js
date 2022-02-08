import HeaderComponent from "../Components/HeaderComponent";
import ContentComponent from "../Components/ContentComponent";
import FooterComponent from "../Components/FooterComponent";

var employeeDetails = {
    empName: "Mayank Gupta",
    empDesignation: "Developer"
}

var dataArray = [10, 20, 30, 40];

export default function ContainerComponent() {
    return (
        <div>
            <HeaderComponent empAge="10" {...employeeDetails}></HeaderComponent>
        </div>
    )
}