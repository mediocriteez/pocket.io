"use client"

import { useCallback, useState } from "react"
import PartSelect from "./PartSelect"
import { ErrorLabel, StateObjInput } from ".."

const ConfirmIngredient = ({pk, confirm}) => {

    const [bomItemData, setBomItemData] = useState({
        sub_part: pk
    })

    const submit = useCallback(() => confirm(bomItemData) , [bomItemData])

    return(
        <fieldset>
            <legend>How much do you need?</legend>
            <ErrorLabel>
                <span>quantity</span>
                <StateObjInput type="number" name="quantity" data={bomItemData} setData={setBomItemData} />
            </ErrorLabel>
            <div>
                <button>cancel</button>
                <button onClick={submit}>confirm</button>
            </div>
        </fieldset>
    )
}

const Ingredients = ({data, setData}) => {

    const [selectedPk, setSelectedPk] = useState('')
    const [selecting, setSelecting] = useState(false)
    const toggleSelecting = useCallback(() => setSelecting(prev => !prev), [])
    
    const clearSelection = useCallback(() => {
        setSelectedPk('')
        setSelecting(false)
    })

    const confirmIngredient = useCallback(ingredientData => {
        setData(prev => {
            return {
                ...prev,
                [ingredientData.sub_part]: ingredientData
            }
        })
        clearSelection()
    }, [])

    return(
        <fieldset>
            <legend>Add ingredients?</legend>
            <div>
                <button onClick={toggleSelecting}>add ingredient</button>
            </div>
            {selecting && 
                <PartSelect 
                    pk={selectedPk} 
                    setPk={setSelectedPk} 
                    RenderOnSelect={
                        <ConfirmIngredient pk={selectedPk} confirm={confirmIngredient} cancel={clearSelection}/>
                    }
                /> 
            } 
        </fieldset>
    )
}

export default Ingredients