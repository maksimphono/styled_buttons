import Button from "./Button.jsx";
import {useRef} from "react";

export default function (props) {
    return (
        <div>
            <span>{props.children[0]}</span>
            <Button 
                variant = {props.variant}
                disbled = {props.disabled}
                disableShadow = {props.disableShadow}
                color = {props.color}
                size = {props.size}
                startIcon = {props.startIcon}
                endIcon = {props.endIcon}
            />
        </div>
    );
}