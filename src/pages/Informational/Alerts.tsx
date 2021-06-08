import React from 'react'
import type { FC } from 'react'

export const Alerts: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Alerts</p>
      {children}
    </div>
  )
}
