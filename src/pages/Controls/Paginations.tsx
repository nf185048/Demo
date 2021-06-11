import React from 'react'
import type { FC } from 'react'
import { Pagination } from '@ncr-design-system/react'

export const PaginationExample: FC<{}> = () => {
  return (
    <div>
      <p>Pagination</p>
      <Pagination pageRange={6} numberOfPages={20} pageSelected={0}></Pagination>
    </div>
  )
}
