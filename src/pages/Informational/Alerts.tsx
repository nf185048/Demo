import React from 'react'
import type { FC } from 'react'
import { Alert, Typography } from '@ncr-design-system/react'

export const Alerts: FC<{}> = () => {
  return (
    <div>
      <p>Alerts</p>
      <Alert>
        <Typography variant='body'>New Email!</Typography>
      </Alert>
    </div>
  )
}
