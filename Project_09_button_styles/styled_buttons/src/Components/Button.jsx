import "../css/button.scss";

export default function Button ({children, variant}) {


    return (
        <button className = "lg">
            {children}
        </button>
    )
}