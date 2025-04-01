import { getParts, createPart, updatePart } from "./getParts"

const Page = () => {
    return(
        <article>
            <button onClick={getParts}>fetch</button>
            <button onClick={createPart}>create</button>
            <button onClick={updatePart}>update</button>
        </article>
    )
}

export default Page