import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'


export const tokenauthcontext=createContext()


function TokenAuth({children}) {


    const[isAuth,setisAuth]=useState(false)


useEffect(()=>{
   const authstatus=JSON.parse(localStorage.getItem('Auth'));
   authstatus?setisAuth(true):setisAuth(false)
})
  return (
    <>
      <tokenauthcontext.Provider value={{ isAuth, setisAuth }}>
       {children}
      </tokenauthcontext.Provider>

    </>
  )
}

export default TokenAuth

