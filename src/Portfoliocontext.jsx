import React, { createContext, useState } from 'react'
export const Portfoliocontext=createContext();

export default function PortfoliocontextProvider({children}) {
    const[changebg,setchangebg]=useState(false); 

    const value={
        changebg,
        setchangebg
    }
  return (
    <Portfoliocontext.Provider value={value}>
          {children}
    </Portfoliocontext.Provider>
  )
}
