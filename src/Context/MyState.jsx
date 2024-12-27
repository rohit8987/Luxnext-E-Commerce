/* eslint-disable react/prop-types */
import myContext from "./MyContext";

const MyState = ({children}) => {
    const name = "Rohit Kumar"
  return (
   <myContext.Provider value={name}>
    {children}
   </myContext.Provider>
  )
}

export default MyState