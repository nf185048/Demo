import React from 'react'
import type { FC } from 'react'
import { Card, Grid } from '@ncr-design-system/react'

export const AppClones: FC<{}> = () => {
  const cardStyle = {
    padding: '4em'
  }
  return (
    <Grid container style={{ margin: '4em 0' }}>
      <Grid item>
        <Card style={cardStyle}>Test Item</Card>
      </Grid>
      <Grid item>
        <Card style={cardStyle}>Test Item</Card>
      </Grid>
      <Grid item>
        <Card style={cardStyle}>Test Item</Card>
      </Grid>
      <Grid item>
        <Card style={cardStyle}>Test Item</Card>
      </Grid>
    </Grid>
  )
}
