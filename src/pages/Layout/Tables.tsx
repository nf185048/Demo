import React from 'react'
import type { FC } from 'react'

export const Tables: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Tables</p>
      {children}
    </div>
  )
}
