// import { UseStateHook } from './hooks/State'

import State2 from "./hooks/State2"
import LiftingStateUp from './hooks/LiftingStateUp'
import Toggleswitch from "./hooks/Toggleswitch"

function App() {

  return (
    <>
    <Toggleswitch/><br />
    {/* <UseStateHook></UseStateHook> */}
    <State2/>
    <LiftingStateUp/>
    </>
  )
}

export default App
