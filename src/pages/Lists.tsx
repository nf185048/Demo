import React from 'react'
import type { FC } from 'react'

export const Lists: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Lists</p>
      {children}
    </div>
  )
}
