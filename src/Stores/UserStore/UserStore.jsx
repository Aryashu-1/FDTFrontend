import {  useState } from "react";
import React from 'react'
import { UserContext } from "../../Contexts/UserContext/UserContext";
function UserStore({children}) {
    let [user,setUser]= useState({})
  return (
    <UserContext.Provider value={[user,setUser]}>
        {children}
    </UserContext.Provider>
  )
}

export default UserStore