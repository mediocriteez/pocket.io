"use client"

import { useCallback } from "react"
import { ErrorLabel, LiveSearchBar, StateSelect } from "../.."

const PartSelect = ({pk, setPk, RenderOnSelect = undefined}) => {

    const [parts, setParts] = useState([])
    useEffect(() => {
        //fetch parts
    }, [])

    const search = useCallback(searchString => {
        //search
    }, [])

    return(
        <form>
            <LiveSearchBar onSubmit={search} />
            <ul>
                {
                    parts?.map?.(p => {
                        
                        return(
                            <li key={p.pk}>
                                <ErrorLabel>
                                    <span>{p.name}</span>
                                    <StateRadio name={p.pk} value={p.pk} data={pk} setData={setPk} />
                                    {pk === p.pk && 
                                        RenderOnSelect
                                    }
                                </ErrorLabel>
                            </li>
                        )
                    })
                }
            </ul>
        </form>
    )
}

export default PartSelect