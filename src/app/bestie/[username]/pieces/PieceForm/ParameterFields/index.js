"use client"

import { useState } from "react"
import { ErrorLabel, StateInput, StateObjRadio } from ".."

const getInputType = (paramData) => {
    if(paramData.checkbox) return 'checkbox'
    if(paramData.selectionList !== null || paramData.choices !== undefined) return 'select'
    return 'text'
}

const InputWrap = ({children, text}) => {
    return(
        <ErrorLabel>
            <span>{text}</span>
            {children}
        </ErrorLabel>
    )
}

const Text = ({parameterData, data, setData}) => {
    return(
        <InputWrap text={parameterData.name}>
            <StateObjRadio name={parameterData.pk} data={data} setData={setData} />
        </InputWrap>
    )
}


const ParameterFields = ({parameters, data, setData}) => {

    const [parameterData, setParameterData] = useState({})
    useEffect(() => {
        // update data properties object params value
    }, [])

    return(
        <fieldset>
            <legend>Properties</legend>
            {
                parameters?.map?.(p => {
                    switch(getInputType(p)){
                        case('text'):
                        ;
                    }
                })
            }
        </fieldset>
    )
}

export default ParemeterFields