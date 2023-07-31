import { useUser } from '../../hooks/zustand/useUser'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({children}: {children: React.ReactNode}) {
  const store = useUser()
  if(!store.user){
    return <Navigate to="/landing" />
  }
  return (
    <>
        {children}
    </>
  )
}
