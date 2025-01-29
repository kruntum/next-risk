'use client'

import {  SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'





export default function Home() {

const router = useRouter()
  const { user } = useUser()

  if (!user) {
    return  <SignIn />
  }

  return (
           router.push('/dashboard')
  )
 
}
