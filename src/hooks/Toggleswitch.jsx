import { useState } from "react";

const Toggleswitch = () =>{
    const [on,off] = useState(false);

    const changeButtonMode = () =>{
        off(!on)
    }
    
    const Btntxt = on  ? 'ON' : 'OFF';
    const BtnClass = on == false ? 'activeButton':''; 

    return(
        <>
            <div className={`SwitchStatus ${BtnClass}`}>{Btntxt}</div>
            <label className="switch">
                <input type="checkbox"  onChange={changeButtonMode} />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default Toggleswitch;