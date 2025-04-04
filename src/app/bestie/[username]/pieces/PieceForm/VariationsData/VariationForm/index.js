import ParameterFields from "../../ParameterFields";

const VariationForm = ({i, data, setData, variationParameters, isTemplate}) => {

    const didMount = useRef(false);

    const [formData, setFormData] = useState({...data})

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return; // skip first run
        }

        setData(prev => {
            const copy = [...prev]
            return copy.splice()
        })
    }, [formData])

    const deleteVariation = () => {
        setData(prev => {

            if(prev.length === 1) return prev

            return [
                ...prev.slice(0, i),
                ...prev.slice(i)
            ]
        })
    }

    return(
        <fieldset>
            <legend></legend>
            <ParameterFields parameters={variationParameters} setData={setFormData} />
            <ErrorLabel>
                <span>Starting Quantity</span>
                <StateObjInput type="number" name="quantity" data={formData} setData={setFormData}/>
            </ErrorLabel>
            {isTemplate && <button onClick={deleteVariation}>delete this variation</button>}
            
        </fieldset>
    )
}

export default VariationForm