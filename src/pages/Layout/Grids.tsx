import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'

export const GridExample: FC<{}> = () => {
  const Content = ({ children }: any) => (
    <div style={{ backgroundColor: 'grey', padding: '2em' }}>{children}</div>
  )

  return (
    <div>
      <Grid container spacing={10} >
        <Grid item xs={3}>
          <Content>content</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>content</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>content</Content>
        </Grid>
        <Grid item xs={3}>
          <Content>content</Content>
        </Grid>
      </Grid>
    </div>
  )
}
