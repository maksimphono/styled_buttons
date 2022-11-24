import "../css/PreviewLayout.scss";
import ButtonWithDescription from "./ButtonWithDescription";
import Button from "./Button.jsx";

export default function PreviewLayout (props) {
    return (
        <>
            <h1>Buttons</h1>
            <div className = "PreviewLayout">
                <Button variant = "outline" size = "sm" color = "danger">Default</Button>
            </div>
        </>
    );
}