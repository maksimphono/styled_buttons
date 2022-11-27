import "../css/button.scss";
import {useEffect, useRef} from "react";
import $ from "jquery";

export default function Button ({children, variant, size, color}) {
    const buttonRef = useRef();
    
    useEffect(() => {
        //const variant = variant.slice(0, variant.indexOf(' '))
        const $button = $(buttonRef.current);

        $button.addClass(variant);
        $button.addClass(size);
        $button.addClass(color);
        console.log($button);

        return () => $button.removeClass();
    });

    return (
        <button ref = {buttonRef} className = "md">
            {children}
        </button>
    )
}