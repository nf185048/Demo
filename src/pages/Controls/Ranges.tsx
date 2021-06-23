import React from 'react'
import type { FC } from 'react'
import { Item, Range, RangeValue, RangeChangeEventDetail } from '@ncr-design-system/react'

export const RangeExample: FC<{}> = () => {
  let value: RangeValue = 25

  const handleUpdate = (e: CustomEvent<RangeChangeEventDetail>) => {
    e.preventDefault()
    value = e.detail.value
  }

  return (
    <div>
      <p>Ranges</p>
      <Item>
        <Range value={value} min={0} max={20} onNcrChange={handleUpdate} />
      </Item>
    </div>
  )
}
