import "./AppThemeComponent.css";

export default function AppThemeComponent(props) {

    return (
        <div className={props.theme}>

            <h1>This is Theme Styling</h1>
            <h2>The theme will be modifie on the Fly</h2>

            <input type="button" value="Red Theme"  />
            <input type="button" value="Black Theme"  />
        </div>
    )
}