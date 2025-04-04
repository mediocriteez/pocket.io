const InputWrap = ({children, text}) => {
    return(
        <ErrorLabel>
            <span>{text}</span>
            {children}
        </ErrorLabel>
    )
}

export default InputWrap