import React, { useState } from 'react'
import type { FC } from 'react'
import { Tabs, Tab } from '@ncr-design-system/react'

export const TabsExample: FC<{}> = () => {
  const [value, setValue] = useState<string>('Item 3')

  const handleTabChange = (e: CustomEvent<string>) => {
    e.preventDefault()
    setValue(e.detail)
  }

  const itemValues = ['Item 1', 'Item 2', 'Item 3']

  return (
    <div>
      <p>Tabs</p>

      <Tabs onNcrChanged={handleTabChange} hideTrack value={value} variant='tabs'>
        {itemValues.map(val => (
          <Tab id={val.split(' ').join('-')} value={val}>
            {val}
          </Tab>
        ))}
        <Tab value='item-disabled' disabled>
          Disabled
        </Tab>
      </Tabs>
    </div>
  )
}
