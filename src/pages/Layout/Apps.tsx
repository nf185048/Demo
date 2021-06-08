import React from 'react'
import type { FC } from 'react'

export const Apps: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Apps</p>
      {children}
    </div>
  )
}
