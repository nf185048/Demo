import React from 'react'
import type { FC } from 'react'

export const ColorExample: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Colors</p>
      {children}
    </div>
  )
}
