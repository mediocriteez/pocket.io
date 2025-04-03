"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import UnitSelection from "./UnitSelection"
import VariationsData from "./VariationsData"
import VariationParameters from "./VariationParameters"

export const LiveSearchBar = ({value, setValue, onSubmit}) => {

    const onChange = useCallback(e => setValue(e.target.value), [])

    const mountedRef = useRef(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if(!mountedRef.current) mountedRef.current === true

        if(timeoutRef.current !== null) clearTimeout(timeoutRef.current)
        
        timeoutRef.current = setTimeout(onSubmit, 2000)
    }, [value])

    return (
        <>
            <input type="text" name="search" value={value} onChange={onChange} />
        </>
    )
}

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

export const StateInput = ({type = 'text', name, value, setValue, ...props}) => {

    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    }, [])

    return <input type={type} name={name} value={value} onChange={onChange} {...props}/>
}

const StateObjInput = ({type, name, valueObj, setValue, ...props}) => {
    const onChange = useCallback(e => {
        const {name, value} = e.target
        setValue( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }, [])

    return <input type={type} name={name} value={valueObj[name]} onChange={onChange} {...props}/>
}

export const StateSelect = ({children, name, value, setValue}) => {

    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    }, [])

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
    }, [])

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
    }, [])

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
    }, [])

    return <input type="radio" name={name} value={valueObj[name]} checked={value[name] === stateVal} onChange={onChange}/>
}

export const PieceForm = () => {

    const [partData, setPartData] = useState({
        name: '',
        description: '',
        virtual: '0',
        unit: '',
        parameters: {}
    })
    const [variationTemplate, setVariationTemplate] = useState({
        quantity: 1,
        parameters: {}
    })
    const [variationParameters, setVariationParameters] = useState({})
    const [variationsData, setVariationsData] = useState([{...variationTemplate}])

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
            <fieldset>
                <legend>Does this piece have variations?</legend>
                <ErrorLabel>
                    <span>no</span>
                    <StateObjRadio name="is_template" value="0" stateVal={partData} setValue={setPartData}/>
                </ErrorLabel>
                <ErrorLabel>
                    <span>yes</span>
                    <StateObjRadio name="is_template" value="1" stateVal={partData} setValue={setPartData}/>
                </ErrorLabel>
            </fieldset>
            <VariationParameters selectedParams={VariationParameters} setSelectedParams={setVariationParameters} legendText={'Variation properties'}/>
            <VariationsData 
                isTemplate={partData.is_template === "1"} 
                template={variationTemplate}
                setData={variationsData}
                setVariationsData={setVariationsData}
                variationParameters={variationParameters}
            />
            <Ingredients data={data} setData={setData} />
            {/* <fieldset>
                <legend>Ingredients</legend>
                <div>

                </div>
            </fieldset> */}
        </form>
    )
}

export default PieceForm