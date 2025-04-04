"use client"

import { useState } from "react"
import Text from "./Text"
import Select from "./Select"
import Checkbox from "./Checkbox"

const getInputType = (paramData) => {
    if(paramData.checkbox) return 'checkbox'
    if(paramData.selectionList !== null || paramData.choices !== undefined) return 'select'
    return 'text'
}

const ParameterFields = ({parameters, setData}) => {

    const [parameterData, setParameterData] = useState(() => {
        const keys = Object.keys(parameters)
        return Object.fromEntries(keys.map(key => [key, '']))
    })

    useEffect(() => {
        // update data properties object params value
        setData(prev => {
            const copy = {...prev}
            const { parameters } = copy
            const newParametersObj = {...parameters}
            for(const pk in parameterData){
                newParametersObj[pk] = parameterData[pk]
            }
            
        })
    }, [parameterData])

    return(
        <fieldset>
            <legend>Properties</legend>
            {
                parameters?.map?.(p => {

                    const props = {
                        parameterData: p,
                        data: parameterData,
                        setData: setParameterData
                    }

                    switch(getInputType(p)){

                        case 'text': return <Text key={p.pk} {...props} />
                        break;
                        case 'select': return <Select key={p.pk} {...props} />
                        break;
                        case 'checkbox': return <Checkbox key={p.pk} {...props} />
                        break;
                        default: return null

                    }
                })
            }
        </fieldset>
    )
}

export default ParameterFields