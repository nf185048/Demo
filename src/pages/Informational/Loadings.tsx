import React from 'react'
import type { FC } from 'react'
import { Loading } from '@ncr-design-system/react'

export const Loadings: FC<{}> = () => {
  return (
    <div>
      <p>Loadings</p>
      <Loading variant='classic' />
    </div>
  )
}
