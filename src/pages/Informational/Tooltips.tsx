import React from 'react'
import type { FC } from 'react'

export const Tooltips: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Tooltips</p>
      {children}
    </div>
  )
}
