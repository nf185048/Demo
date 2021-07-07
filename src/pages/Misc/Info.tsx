import React from 'react'
import type { FC } from 'react'
import { Card, Grid, Item, Label, List, ListTitle, Typography } from '@ncr-design-system/react'

import * as Theme from '@ncr-design-system/theme-utils'

export const Info: FC<{}> = () => {
  const theme = Theme.generateColor({
    main: "#3C4CE4",
    type: 'light'
  })

  return (
    <Grid style={{ margin: '2em 0' }} container spacing={3}>

      <Grid item xs={4}>
        <Typography variant='largeTitle' gutter={4}> About this site </Typography>
        <Typography variant='title3'> This site contains interfaces and examples that test out each of the components in the NCR Design System. Navigate to each component to see a contextualized usage. This site will be mostly useful in end-user testing, to see how the web components perform. </Typography>
      </Grid>


      <Grid item xs={12} style={{ borderLeft: `1px solid ${theme[30]}` }}>
        <List>
          <ListTitle>Tasks</ListTitle>
          <Item>
            <Label position='stacked'>Shopping</Label>
            <Typography>A small app that mimics a shopping flow.</Typography>
          </Item>
          <Item>
            <Label position='stacked'>Colors</Label>
            <Typography>An interface that mimics a language learning site.</Typography>
          </Item>
        </List>
      </Grid>
    </Grid>
  )
}
