"use client"

import { useCallback, useState } from "react"
import UnitSelection from "./UnitSelection"

export const ErrorLabel = ({children, error}) => {
    return(
        <ErrorLabel>
            {children}
            {error && 
                <span>{error}</span>
            }
        </ErrorLabel>
    )
}

const StateInput = ({type, name, value, setValue}) => {

    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    })

    return <input type={type} name={name} value={value} onChange={onChange}/>
}

const StateObjInput = ({type, name, valueObj, setValue}) => {
    const onChange = useCallback(e => {
        const {name, value} = e.target
        setValue( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    })

    return <input type={type} name={name} value={valueObj[name]} onChange={onChange}/>
}

export const StateSelect = ({children, name, value, setValue}) => {

    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    })

    return(
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
    )
}
export const StateObjSelect = ({children, name, valueObj, setValue}) => {
    const onChange = useCallback(e => {
        const {name, value} = e.target
        setValue( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    })

    return (
        <select type={type} name={name} value={valueObj[name]} onChange={onChange}>
            {children}
        </select>
    )
}

export const StateRadio = ({name, value, stateVal, setValue}) => {
    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    })

    return <input type="radio" name={name} value={value} checked={stateVal === value} onChange={onChange}/>
}


export const StateObjRadio = ({name, value, stateVal, setValue}) => {
    const onChange = useCallback(e => {
        const {name, value} = e.target
        setValue( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    })

    return <input type="radio" name={name} value={valueObj[name]} checked={value[name] === stateVal} onChange={onChange}/>
}

export const PieceForm = () => {

    const [partData, setPartData] = useState({
        name: '',
        description: '',
        virtual: '0',
        unit: '',
    })

    

    return(
        <form>
            <fieldset>
                <div>
                    <ErrorLabel>
                        <span>Name your piece</span>
                        <StateObjInput type="text" name="name"/>
                        <StateObjStateObjInput type="text" name="name" value={partData} setValue={setPartData}/>
                    </ErrorLabel>
                </div>
                <div>
                    <ErrorLabel>
                        <span>Describe your piece</span>
                        <textarea name="description"></textarea>
                    </ErrorLabel>
                </div>
                <div>
                    <fieldset>
                        <legend>Is this piece digital?</legend>
                        <ErrorLabel>
                            <span>no</span>
                            <StateObjRadio type="radio" name="digital" value="0" />
                        </ErrorLabel>
                        <ErrorLabel>
                            <span>yes</span>
                            <StateObjRadio type="radio" name="digital" value="1" />
                        </ErrorLabel>
                    </fieldset>
                </div>
                <div>
                    <UnitSelection unitValue={partData} setUnitValue={setPartData}/>
                </div>
            </fieldset>
            <div>
                <div>
                    <fieldset>
                        <ErrorLabel>
                            <span>Starting Quantity</span>
                            <StateObjInput type="number" name="quantity" />
                        </ErrorLabel>
                    </fieldset>
                </div>
            </div>
            {/* <fieldset>
                <legend>Ingredients</legend>
                <div>

                </div>
            </fieldset> */}
        </form>
    )
}

export default PieceForm