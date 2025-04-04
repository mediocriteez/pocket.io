"use client"

import { useEffect } from "react"
import { StateObjSelect } from "../.."
import InputWrap from "../InputWrap"

const Select = ({parameterData, data, setData}) => {

    const [choices, setChoices] = useState(() => parameterData.choices !== undefined ? parameterData.choices : null)

    useEffect(() => {
        if(choices !== null) return

        console.log('fetch selectionList')
    }, [])

    return(
        <InputWrap text={parameterData.name}>
            <StateObjSelect name={parameterData.pk} data={data} setData={setData}>
                {
                    choices?.map?.(c => {
                        return <option key={c} value={c}>{c}</option>
                    })
                }
            </StateObjSelect>
        </InputWrap>
    )
}

export default Select