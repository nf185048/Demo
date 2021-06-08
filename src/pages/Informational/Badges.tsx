import React from 'react'
import type { FC } from 'react'

export const Badges: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Badges</p>
      {children}
    </div>
  )
}
