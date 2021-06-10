import React from 'react'
import type { FC } from 'react'
import { Badge, Button } from '@ncr-design-system/react/'

export const Badges: FC<{}> = () => {
  return (
    <div>
      <p>Badges</p>
      <Button variant='outline'>
        Counter
        <Badge variant='counter' counter={8} truncateAt={99}></Badge>
      </Button>
    </div>
  )
}
