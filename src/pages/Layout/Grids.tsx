import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'

export const GridExample: FC<{}> = () => {
  return (
    <div>
      <Grid container spacing={10} >
        <Grid item xs={3}>
          <p>content</p>
        </Grid>
        <Grid item xs={3}>
          <p>content</p>
        </Grid>
        <Grid item xs={3}>
          <p>content</p>
        </Grid>
        <Grid item xs={3}>
          <p>content</p>
        </Grid>
      </Grid>
    </div>
  )
}
