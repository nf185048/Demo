import React from 'react'
import type { FC } from 'react'
import { Searchbar } from '@ncr-design-system/react'

export const SearchExample: FC<{}> = () => {
  return (
    <div>
      <p>Searches</p>

      <Searchbar
        id='search'
        placeholder='Search number between one and ten...'
        data={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']}
        name='Search'
      ></Searchbar>
    </div>
  )
}
