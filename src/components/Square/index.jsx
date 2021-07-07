
import classes from "./Square.module.css";

export const Square = props => {
    const cls = [
        classes.Square,
        classes[props.color]
    ]

    const chooseSquare = () => {

    }

    return (
        <div className = { cls.join(' ') } onClick = { chooseSquare }>

        </div>
    )
}