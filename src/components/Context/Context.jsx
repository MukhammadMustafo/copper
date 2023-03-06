import { createContext, useState } from "react";


const Context = createContext()
function Provider ({children}){
    const [value, setValue] = useState('')
    const [catal, setCatal] = useState({})
    const [seter, setSeter] = useState({})
    const [id, setId] = useState(0)
    const [number, setNumber] = useState(0)
    const [userrr, setUserrr] = useState()
    const [page, setPage] = useState('')
    const [raqam, setRaqam] = useState({})
    return(
        <Context.Provider value={{value, setValue, catal, setCatal, seter, setSeter, raqam, setRaqam, id, setId, userrr, setUserrr, number, setNumber,page, setPage}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}