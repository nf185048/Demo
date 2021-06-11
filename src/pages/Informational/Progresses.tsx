import React from 'react'
import type { FC } from 'react'
import { Grid, Typography, ProgressIndicator } from '@ncr-design-system/react'

export const ProgressExample: FC<{}> = () => {
  return (
    <div>
      <p>Progresses</p>
      <Grid item container>
        <Typography variant='headline' bold>
          Default
        </Typography>
        <ProgressIndicator percentage={25} variant='default'></ProgressIndicator>
      </Grid>
    </div>
  )
}
