import React from "react";

const MathLogic = (props) => {
    let value;
    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
    }
    return value;
}

export default MathLogic;