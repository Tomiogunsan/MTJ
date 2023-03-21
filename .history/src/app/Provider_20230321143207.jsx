"use client";


import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-gray-700 dark:text-gray-200 transition text-gray-700'>
        {children}
        </div>
            
    </ThemeProvider>
  )
}
