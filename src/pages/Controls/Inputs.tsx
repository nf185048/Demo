import React from 'react'
import type { FC } from 'react'
import { Label, Option, InputWrapper, Button, Icon, Item, List, ListTitle, Select } from '@ncr-design-system/react'

export const InputExample: FC<{}> = () => {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

  return (
    <div>
      <List>
        <ListTitle lines='inset'>
          <Label>Form Test</Label>
        </ListTitle>
        <Item>
          <Label position='stacked'>Single Select</Label>
          <Select filterInput name='Select Input' value={[{ name: `${arr[0]}`, value: arr[0] }]}>
            {arr.map(v => (
              <Option name={v} value={v} />
            ))}
          </Select>
        </Item>
        <Item>
          <Label position='stacked'>Multi-Select</Label>
          <InputWrapper variant='simple'>
            <Icon name='football' />
            <Select
              filterInput
              multiple
              name='Select Input'
              value={[
                { name: `${arr[0]}`, value: arr[0] },
                { name: `${arr[1]}`, value: arr[1] }
              ]}
            >
              {arr.map(v => (
                <Option name={v} value={v} />
              ))}
            </Select>
          </InputWrapper>
        </Item>
        <Item>
          <Label position='stacked'>Simple Item</Label>
          <InputWrapper variant='simple'>
            <Icon name='football' />
            <input type='text' />
          </InputWrapper>
        </Item>
        <Item>
          <Label position='stacked'>Simple Item</Label>
          <InputWrapper variant='simple'>
            <Icon name='football' />
            <textarea />
          </InputWrapper>
        </Item>
        <Item>
          <Label position='stacked'>Simple Item</Label>
          <InputWrapper variant='simple' errorMessage='This is an error message'>
            <input type='text' />
            <Button variant='text' size='icon-sm'>
              <Icon name='football' />
            </Button>
          </InputWrapper>
        </Item>
        <Item>
          <Label position='stacked'>Default Item</Label>
          <InputWrapper>
            {/* <Icon name='football' /> */}
            <input type='text' />
            <Button variant='text' size='icon-sm'>
              <Icon name='football' />
            </Button>
          </InputWrapper>
        </Item>
        <Item>
          <Label position='stacked'>Default Item</Label>
          <InputWrapper errorMessage='This is an error message'>
            <Icon name='football' />
            <input type='text' />
          </InputWrapper>
        </Item>
      </List>
    </div>
  )
}
