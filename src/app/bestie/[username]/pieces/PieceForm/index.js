const PieceForm = () => {

    

    return(
        <form>
            <fieldset>
                <label>
                    <span>Name of Piece</span>
                    <input type="text" name="name"/>
                </label>
            </fieldset>
            <div>
                <fieldset>
                    <label>
                        <span>Starting Quantity</span>
                        <input type="number" name="quantity" />
                    </label>
                </fieldset>
            </div>
            {/* <fieldset>
                <legend>Ingredients</legend>
                <div>

                </div>
            </fieldset> */}
        </form>
    )
}

export default PieceForm