import React from 'react'
import type { FC } from 'react'
import { Grid, Typography } from '@ncr-design-system/react'



export const Home: FC<{}> = () => {
  return (
    <Grid style={{ margin: '2em 0' }} container justify='center' alignItems='center'>
      <Typography variant='largeTitle'> Home Page ! Nice </Typography>
    </Grid>
  )
}
