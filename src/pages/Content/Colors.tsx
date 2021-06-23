import { FC, useState } from 'react'
import { Button, Card, Grid, Input, InputWrapper, Label, Tab, Tabs, Typography } from '@ncr-design-system/react'
import "./style.css"
import { PeopleTalking } from '../../assets'

// './people-talking.svg'
// './eliza.svg'
// './juan.svg'
// './alexis.svg'
export const ColorExample: FC<{}> = () => {
  const [value, setValue] = useState<string>('eliza')


  const handleTabChange = (e: CustomEvent<string>) => {
    e.preventDefault()
    setValue(e.detail)
  }

  const Eliza = () => {
    return (
      <Card className='teacherCard'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='body' bold>Eliza Soboleva</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='callout'>A passionate polyglot, Eliza works hard to teach her favorite languages of Russian and German to her students. Based in Berlin, she owns a media studio where she hosts exchange students to assist in language acquisition.</Typography>
          </Grid>
        </Grid>
      </Card>
    )
  }

  const Juan = () => {
    return (
      <Card className='teacherCard'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='body' bold>Juan Suarez</Typography>
            {/* <JuanPP /> */}
          </Grid>
          <Grid item xs={6}>
            <Typography variant='callout'>A successful restauranteer in San Diego, Juan creates cuisine in the Asian/Latin fusion realm. He teaches Spanish to our passionate students while also hosting a language night in his restaurants every week to help spread the language.</Typography>
          </Grid>
        </Grid>
      </Card>
    )
  }

  const Alexis = () => {
    return (
      <Card className='teacherCard'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='body' bold>Alexis Monte</Typography>
            {/* <AlexisPP /> */}
          </Grid>
          <Grid item xs={6}>
            <Typography variant='callout'>A renowned college professor, Alexis loves to teach in his native language of French. He leads lectures for hundreds of students every semester and is a traveling lecturer as well, teaching the French culture and language to all who are interested.</Typography>
          </Grid>
        </Grid>
      </Card>
    )
  }

  return (
    <div className='colorsDemoContainer'>
      <Grid container justify='center' alignItems='center'>
        <Grid container spacing={10} alignItems='baseline' className='bar'>
          <Grid item xs={1} className='fakeCompany'>
            <Button variant='text'>Doodle</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='text'>About</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='text'>Courses</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='text'>Prices</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='outline'>Login</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant='fill'>Sign Up</Button>
          </Grid>
        </Grid>

        <Grid container justify='flex-end' alignItems='center'>
          <Grid item xs={6} >
            <Typography variant='largeTitle'>Learn new languages and move forward</Typography>
            <Grid container alignItems='flex-end' spacing={1}>
              <Grid item xs={4}>
                <Label position='stacked'>Native Language:</Label>
                <InputWrapper>
                  <Input placeholder='English'></Input>
                </InputWrapper>
              </Grid>
              <Grid item xs={4}>
                <Label position='stacked'>Will Study:</Label>
                <InputWrapper>
                  <Input placeholder='Russian'></Input>
                </InputWrapper>
              </Grid>
              <Grid item>
                <Button>Go!</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <PeopleTalking />
          </Grid>
        </Grid>

        <Grid container style={{ paddingTop: '8em' }} justify='center' alignItems='center'>
          <Tabs
            onNcrChanged={handleTabChange}
            hideTrack
            value={value}
          >
            <Tab value='eliza'>Eliza Soboleva</Tab>
            <Tab value='juan'>Juan Suarez</Tab>
            <Tab value='alexis'>Alexis Monte</Tab>
          </Tabs>
        </Grid>

        <Grid container justify='center' alignItems='center' style={{ paddingTop: '2em' }} >
          {(value === 'eliza') && <Eliza />}
          {(value === 'juan') && <Juan />}
          {(value === 'alexis') && <Alexis />}
        </Grid>

      </Grid>
    </div>
  )
}
