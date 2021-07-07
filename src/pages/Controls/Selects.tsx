import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Grid } from '@ncr-design-system/react'
import './style.css'


export const SelectExample: FC<{}> = () => {
  const [selected, setSelected] = useState<ISelectedValue[]>([{ name: 'red', value: 'red' }])
  const dummyColorList = ['red', 'orange', 'yellow']

  return (
    <Grid container spacing={3} className='defaultContainer'>
      <Select filterInput value={selected} onNcrUpdate={(e) => setSelected(e.detail)}>
        {dummyColorList.map(v => (
          <Option name={v} value={v} />
        ))}
      </Select>
    </Grid>
  )
}
