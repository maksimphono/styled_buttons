import "../css/button.scss";
import {useEffect, useRef} from "react";
import $ from "jquery";

export default function Button ({children, variant, size, color, disabled, disableShadow, startIcon, endIcon, className}) {
    const IconComponent = ({value, hide}) => (<i style={{display: (hide)?"none":"inline"}} className = "material-icons">{value}</i>);
    const buttonRef = useRef();
    
    useEffect(() => {
        const $button = $(buttonRef.current);

        $button.addClass(className);
        $button.addClass(variant);
        $button.addClass(size || "md");
        $button.addClass(color);
        $button.addClass(disableShadow && "disable-shadow");

        return () => $button.removeClass();
    });

    return (
        <button ref = {buttonRef} disabled = {disabled}>
            <IconComponent value = {startIcon || ""}/>
            {children}
            <IconComponent value = {endIcon || ""}/>
        </button>
    )
}