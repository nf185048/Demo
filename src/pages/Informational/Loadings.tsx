import React from 'react'
import type { FC } from 'react'

export const Loadings: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Loadings</p>
      {children}
    </div>
  )
}
