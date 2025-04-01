import VariationForm from "./VariationForm"

const VariationsData = (template, data, setData) => {

    const addVariation = () => {
        setData(prev => {
            return [ 
                ...prev,
                {...template}
            ]
        })
    }

    return(
        <fieldset>
            <legend>Does this piece vary?</legend>
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