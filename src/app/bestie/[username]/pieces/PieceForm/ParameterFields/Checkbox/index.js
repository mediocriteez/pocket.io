"use client"

import { StateBinaryCheckbox } from "../.."
import InputWrap from "../InputWrap"

const Checkbox = ({parameterData, data, setData}) => {
    return(
        <InputWrap text={parameterData.name}>
            <fieldset>
                <StateBinaryCheckbox name={parameterData.pk} data={data} setData={setData} />
            </fieldset>
        </InputWrap>
    )
}

export default Checkbox