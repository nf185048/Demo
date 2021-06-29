import React, { useState } from 'react'
import type { FC } from 'react'
import { ISelectedValue } from '@ncr-design-system/core'
import { Select, Option, Label, Grid } from '@ncr-design-system/react'
import './style.css'
import { SampleInterface } from '../Misc'
export const SelectExample: FC<{}> = () => {
  const [interfaceColor, setInterfaceColor] = useState<ISelectedValue[]>([{ name: 'white', value: 'white' }])
  const [cardColor, setCardColor] = useState<ISelectedValue[]>([{ name: '#F1F1F1', value: '#F1F1F1' }])
  const [textColor, setTextColor] = useState<ISelectedValue[]>([{ name: 'black', value: 'black' }])
  const [graphicStartColor, setGraphicStartColor] = useState<ISelectedValue[]>([{ name: 'red', value: 'red' }])
  const [graphicEndColor, setGraphicEndColor] = useState<ISelectedValue[]>([{ name: '#E08585', value: '#E08585' }])

  const handleInterfaceChange = (e: any) => setInterfaceColor(e.detail)
  const handleCardChange = (e: any) => setCardColor(e.detail)
  const handleTextChange = (e: any) => setTextColor(e.detail)
  const handleGraphicStartChange = (e: any) => setGraphicStartColor(e.detail)
  const handleGraphicEndChange = (e: any) => setGraphicEndColor(e.detail)

  const dummyColorList = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Chartreuse', 'MediumSpringGreen', 'LightSeaGreen', 'Teal', 'LightCyan', 'SkyBlue', 'MediumSlateBlue', 'Goldenrod', 'Gold', 'Yellow', 'LightYellow', 'MistyRose', 'Black']

  return (
    <Grid container spacing={3} className='defaultContainer'>

      <Grid item xs={4}>
        <Label>Set Background Color</Label>
        <Select filterInput name='interfaceColor' value={interfaceColor} onNcrUpdate={handleInterfaceChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Set Card Background Color</Label>
        <Select filterInput name='cardColor' value={cardColor} onNcrUpdate={handleCardChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4}>
        <Label>Set Text Color</Label>
        <Select filterInput name='textColor' value={textColor} onNcrUpdate={handleTextChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <Grid item xs={4} >
        <Label>Set Graphics Gradient: Start</Label>
        <Select style={{ paddingBottom: '1em' }} filterInput name='graphicsColor' value={graphicStartColor} onNcrUpdate={handleGraphicStartChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>

        <Label>Set Graphics Gradient: End</Label>
        <Select filterInput name='graphicsColor' value={graphicEndColor} onNcrUpdate={handleGraphicEndChange}>
          {dummyColorList.map(v => (
            <Option name={v} value={v} />
          ))}
        </Select>
      </Grid>

      <div className='selectBorder' />

      <SampleInterface
        interfaceColor={interfaceColor[0].value}
        cardColor={cardColor[0].value}
        textColor={textColor[0].value}
        graphicStartColor={graphicStartColor[0].value}
        graphicEndColor={graphicEndColor[0].value}
      />
    </Grid>
  )
}
