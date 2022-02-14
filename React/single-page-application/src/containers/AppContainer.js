import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

import { BrowserRouter } from "react-router-dom";

export default function AppContainer() {
    return (
        <BrowserRouter>
            <div style={{margin: "25px"}}>
                <HeaderComponent></HeaderComponent>
                <ContentComponent></ContentComponent>
                <FooterComponent></FooterComponent>
            </div>
        </BrowserRouter>
    )
}