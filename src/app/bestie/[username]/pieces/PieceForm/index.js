"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import UnitSelection from "./UnitSelection"
import VariationsData from "./VariationsData"
import Parameters from "./Parameters"
import ParameterFields from "./ParameterFields"

export const LiveSearchBar = ({onSubmit}) => {

    const [searchString, setSearchString] = useState('')

    const onChange = useCallback(e => setSearchString(e.target.value), [])

    const mountedRef = useRef(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if(!mountedRef.current){
            mountedRef.current = true
            return
        }

        if(timeoutRef.current !== null) clearTimeout(timeoutRef.current)
        
        timeoutRef.current = setTimeout(onSubmit, 2000, searchString)
    }, [searchString])

    return (
        <>
            <input type="text" name="search" value={searchString} onChange={onChange} />
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

export const StateBinaryCheckbox = (({ name, value, setValue, ...props }) => {

    const onChange = useCallback(e => {
        const {checked} = e.target
        setValue(checked)
    }, [])

    return <input type="checkbox" name={name} value={value} onChange={onChange} {...props} />
})

export const StateObjBinaryCheckbox = (({ name, value, setValue, ...props }) => {

    const onChange = useCallback(e => {
        const {name, checked} = e.target
        setValue( prev => {
            return{
                ...prev,
                [name]: checked
            }
        })
    }, [])

    return <input type="checkbox" name={name} value={value} onChange={onChange} {...props} />
})

export const StateInput = ({type = 'text', name, value, setValue, ...props}) => {

    const onChange = useCallback(e => {
        const {value} = e.target
        setValue(value)
    }, [])

    return <input type={type} name={name} value={value} onChange={onChange} {...props}/>
}

export const StateObjInput = ({type, name, valueObj, setValue, ...props}) => {
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
    const [partParameters, setPartParameters] = useState({})

    const [variationTemplate, setVariationTemplate] = useState({
        quantity: 1,
        parameters: {}
    })
    const [variationParameters, setVariationParameters] = useState({})
    const [variationsData, setVariationsData] = useState([{...variationTemplate}])

    const [bomData, setBomData] = useState({})

    return(
        <form>
            <fieldset>

                <ErrorLabel>
                    <span>Name your piece</span>
                    <StateObjInput type="text" name="name"/>
                    <StateObjStateObjInput type="text" name="name" value={partData} setValue={setPartData}/>
                </ErrorLabel>

                <ErrorLabel>
                    <span>Describe your piece</span>
                    <textarea name="description"></textarea>
                </ErrorLabel>

                <Parameters selectedParams={partParameters} setSelectedParams={setPartParameters} legendText={'Add properties'}/>
                <ParameterFields parameters={partParameters} setData={setPartData} />

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

                <UnitSelection unitValue={partData} setUnitValue={setPartData}/>

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
            {partData.is_template == 1 &&
                <Parameters selectedParams={variationParameters} setSelectedParams={setVariationParameters} legendText={'Select the properties that vary'}/>
            }
            <VariationsData 
                isTemplate={partData.is_template === "1"} 
                template={variationTemplate}
                setData={variationsData}
                setVariationsData={setVariationsData}
                variationParameters={variationParameters}
            />
            <Ingredients data={bomData} setData={setBomData} />
            {/* <fieldset>
                <legend>Ingredients</legend>
                <div>

                </div>
            </fieldset> */}
        </form>
    )
}

export default PieceForm