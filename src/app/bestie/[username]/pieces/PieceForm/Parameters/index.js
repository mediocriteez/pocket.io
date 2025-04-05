"use effect"

import { useCallback, useState } from "react"
import { ErrorLabel, LiveSearchBar, StateInput } from ".."

const Parameters = ({selectedParams, setSelectedParams, legendText}) => {

    const [searchString, setSearchString] = useState('')
    const [allParams, setAllParams] = useState({1: {name: 'Color'}, 2: {name: 'Size'}})

    const addParam = useCallback(addKey => setSelectedParams(prev => {
        const copy = {...selectedParams}
        copy[addKey] = {...allParams[key]}
        return copy
    }) , [])

    const removeParam = useCallback(removeKey => setSelectedParams(prev => {
        const copy = {...prev}
        delete copy[removeKey]
        return copy
    }), [])

    const allOnChange = useCallback(e => {
        const {
            value,
            checked
        } = e.target

        if(!checked){ 
            addParam(value)
        }else{
            removeParam(value)
        }

    }, [])

    const selectedOnChange = useCallback(e => {
        const {
            checked,
            value
        } = e.target

        if(checked) return

        removeParam(value)
    }, [])

    return(
        <fieldset>
            <legend>{legendText}</legend>
            <label>
                <span>Search properties</span>
                <LiveSearchBar onSubmit={() => console.log('search parameters')}/>
            </label>
            <fieldset>
                <legend>All properties</legend>
                {Object.values(allParams)?.map?.(p => {
                    return(
                        <ErrorLabel key={p.name}>
                            <span>{p.name}</span>
                            <StateInput 
                                type="checkbox" 
                                name="variation_param" 
                                value={p.pk}  
                                onChange={allOnChange} 
                                checked={Object.keys(selectedParams).includes(p)} 
                            />
                        </ErrorLabel>
                    )
                })}
            </fieldset>
            <fieldset>
                <span>Selected Properties</span>
                {Object.values(selectedParams)?.map?.(p => {
                    return(
                        <ErrorLabel key={p.name}>
                            <span>{p.name}</span>
                            <StateInput type="checkbox" name="selected_param" value={p.pk}  onChange={selectedOnChange} checked={true} />
                        </ErrorLabel>
                    )
                })}
            </fieldset>
        </fieldset>
    )
}

export default Parameters