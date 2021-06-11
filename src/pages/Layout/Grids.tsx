import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'

export const GridExample: FC<{}> = () => {
  return (
    <div>
      <p>Grids</p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=12</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=6</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=6</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>xs=3</div>
        </Grid>
      </Grid>
    </div>
  )
}
