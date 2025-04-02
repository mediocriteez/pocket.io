import { simpleKey } from "@/utils"
import VariationForm from "./VariationForm"

const VariationsData = (isTemplate, template, data, setData) => {

    const addVariation = () => {
        setData(prev => {
            return [ 
                ...prev,
                {
                    key: simpleKey(),
                    ...template
                }
            ]
        })
    }

    return(
        <fieldset>
            {isTemplate && <legend>variations</legend>}
            {
                data?.map?.((v, index) => {
                    return <VariationForm key={v.key} i={index} data={v} setData={setData}/>
                })
            }
            <button type="button" onClick={addVariation}>add a variation</button>
        </fieldset>
    )
}

export default VariationsData