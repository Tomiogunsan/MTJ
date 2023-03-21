"use client"


import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider>
            {children}
    </ThemeProvider>
  )
}
