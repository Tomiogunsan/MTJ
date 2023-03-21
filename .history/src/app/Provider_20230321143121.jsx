"use client";


import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div cl>
        {children}
        </div>
            
    </ThemeProvider>
  )
}
