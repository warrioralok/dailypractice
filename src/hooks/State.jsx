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
        </div>
        </>
    )
} 