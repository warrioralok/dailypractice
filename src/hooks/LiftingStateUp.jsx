/* eslint-disable react/prop-types */
import { useState } from "react"

const LiftingStateUp = () => {
    const [oldVal , NewVal] = useState("");
    return (
        <>
            <br />
            <InputElem oldVal={oldVal} NewVal={NewVal}/>
            <DisplayData oldVal={oldVal}/>
        </>
    )
}

const InputElem = ({oldVal, NewVal}) => {
    
    return(
        <input type="text" value={oldVal} onChange={(e) =>NewVal(e.target.value)} />
    )
}

// eslint-disable-next-line react/prop-types
const DisplayData = ({oldVal}) => {
    return(
        <>
            <br/>
            <p>{oldVal}</p>
        </>
    )
}

export default LiftingStateUp;