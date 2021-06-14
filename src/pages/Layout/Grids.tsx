import React from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'

export const GridExample: FC<{}> = () => {
  const Content = (children: any) => (
    <div style={{ padding: '16px', backgroundColor: '#F9FAFF', textAlign: 'center' }}>{children}</div>
  )
  return (
    <div>
      <p>Grids</p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Content>xs=12</Content>
        </Grid>
        <Grid item xs={6}>
          <Content>xs=6</Content>
        </Grid>
        <Grid item xs={6}>
          <Content>xs=6</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>xs=3</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>xs=3</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>xs=3</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>xs=3</Content>
        </Grid>
      </Grid>
    </div>
  )
}
