import React from 'react'
import type { FC } from 'react'

export const Drawers: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Drawers</p>
      {children}
    </div>
  )
}
