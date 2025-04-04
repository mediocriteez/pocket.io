import InputWrap from "../InputWrap"
import { StateObjInput } from "../.."

const Text = ({parameterData, data, setData}) => {
    return(
        <InputWrap text={parameterData.name}>
            <StateObjInput name={parameterData.pk} data={data} setData={setData} />
        </InputWrap>
    )
}

export default Text