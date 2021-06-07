import React from 'react'
import type { FC } from 'react'

export const Colors: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Colors</p>
      {children}
    </div>
  )
}
