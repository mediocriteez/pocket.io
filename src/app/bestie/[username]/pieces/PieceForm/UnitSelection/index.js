"use client"

import { useCallback, useMemo, useState } from "react"
import { ErrorLabel, StateObjRadio, StateObjSelect, StateRadio } from ".."
import convert from "convert-units"

const UnitSelection = (unitValue, setUnitValue) => {

    const [measure, setMeasure] = useState()
    const measurementOptions = useMemo(() => {
        switch(measure){
            case 'weight':
                return convert().possibilities('mass')
                break;
            case 'length':
                return convert().possibilities('length')
            default:
                return []
        }

    }, [measure])
    return(
            <fieldset>
                <legend>Piece measure</legend>
                <fieldset>
                    <legend>How Do You Measure This Piece?</legend>
                    <ErrorLabel>
                        <span>Individual pieces</span>
                        <StateRadio name="measure" value="individual" stateVal={measure} setValue={setMeasure}/>
                    </ErrorLabel>
                    <ErrorLabel>
                        <span>Weight</span>
                        <StateRadio name="measure" value="weight" stateVal={measure} setValue={setMeasure}/>
                    </ErrorLabel>
                    <ErrorLabel>
                        <span>Length</span>
                        <StateRadio name="measure" value="length" stateVal={measure} setValue={setMeasure}/>
                    </ErrorLabel>
                </fieldset>
                <fieldset>
                    <legend></legend>
                </fieldset>
                {measure !== 'individual' &&
                    <ErrorLabel>
                        <span>Select piece unit</span>
                        <StateObjSelect name="unit" value={unitValue} setValue={setUnitValue}>
                            <option value=''>-</option>
                            {
                                measurementOptions?.map?.(o => {
                                    return <option value={o}>{o}</option>
                                })
                            }
                        </StateObjSelect>
                    </ErrorLabel>
                }
            </fieldset>
    )
}

export default UnitSelection