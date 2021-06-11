import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option } from '@ncr-design-system/react'

export const SelectExample: FC<{}> = () => {
  const [value, setValue] = useState<ISelectedValue[]>([])

  const handleChange = (e: any) => {
    setValue(e.detail)
  }

  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
  return (
    <>
      <p>Select</p>

      <Select filterInput name='SelectOne' value={value} onNcrUpdate={handleChange}>
        {arr.map(v => (
          <Option name={v} value={v} />
        ))}
      </Select>
    </>
  )
}
