import React from 'react'
import type { FC } from 'react'
import { Breadcrumb, BreadcrumbList } from '@ncr-design-system/react'

export const Breadcrumbs: FC<{}> = () => {
  return (
    <div>
      <p>Breadcrumbs</p>
      <BreadcrumbList>
        <Breadcrumb href='#' name='Home'>
          Home
        </Breadcrumb>
        <Breadcrumb href='#' name='First level'>
          First Level
        </Breadcrumb>
        <Breadcrumb href='#' name='Second Level'>
          Second Level
        </Breadcrumb>
      </BreadcrumbList>
    </div>
  )
}
