
const Button = ({mediatorFuncAdding, mediatorFuncLeft}) => {
    return (
        <>
            <button onClick={mediatorFuncAdding}>Down</button>
            <button onClick={mediatorFuncLeft}>Left</button>
        </>

    )
}

export default Button;