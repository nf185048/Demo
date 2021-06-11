import React, { useState } from 'react'
import type { FC } from 'react'
import { Grid, FormLabel, Radio, RadioGroup } from '@ncr-design-system/react'

export const RadioExample: FC<{}> = () => {
  const [value, setValue] = useState<string>('blue')

  const handleChange = (e: CustomEvent<{ value: string }>) => {
    e.preventDefault()
    setValue(e.detail.value)
  }

  return (
    <div>
      <p>Radios</p>
      <RadioGroup value={value} onNcrChange={handleChange}>
        <Grid item container spacing='2' justify='center'>
          <FormLabel label='1'>
            <Radio value='1' />
          </FormLabel>
          <FormLabel label='2'>
            <Radio value='2' />
          </FormLabel>
          <FormLabel label='3'>
            <Radio value='3' />
          </FormLabel>
          <FormLabel label='4'>
            <Radio value='4' />
          </FormLabel>
        </Grid>
      </RadioGroup>
    </div>
  )
}
