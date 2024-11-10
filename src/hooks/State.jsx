import { useState } from "react"
import styles from '../hooks/State.module.css';

export const UseStateHook = () => {
    const [preVal, newVal] = useState(0);
    
    
    
    const inc = () =>{
        newVal( () =>{
           return preVal + 1;
        })
    }
    
    return(

        <>
        <div className={styles.container}>
            <div className={styles.count}>{preVal}</div>
            <button className={styles.buttonContainer} onClick={inc}>Increment</button>
            <ChildComponent count={preVal}/>
        </div>
        
        </>
    )
}

// eslint-disable-next-line react/prop-types
const ChildComponent = ({count}) =>{
    return (
        <h2>This is Child Component Count{` - ${count}`}</h2>
    )
} 