import React from 'react'
import type { FC } from 'react'
import { Grid, Tooltip, Button } from '@ncr-design-system/react'

export const TooltipExample: FC<{}> = () => {
  return (
    <div>
      <p>Tooltips</p>
      <Grid xs={12} container justify='center' item>
        <Tooltip text='Enter tooltip text.' placement='top' delay={0.3}>
          <Button>Click vto see tooltip</Button>
        </Tooltip>
      </Grid>
    </div>
  )
}
