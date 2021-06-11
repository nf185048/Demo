import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Application.css'
import * as Pages from './pages'
import { Grid, Button, List, ItemGroup, Item, Label, Drawer, Typography } from '@ncr-design-system/react'
import { ReactComponent as Menu } from './assets/menu.svg'

function Application() {
  const [opened, setOpened] = useState(false)

  const handleDrawerClose = (_e: any) => {
    setOpened(false)
  }

  const AppDrawer = () => {
    return (
      <Drawer open={opened} placement='left' onHide={handleDrawerClose}>
        <List>
          <ItemGroup>
            <Item>
              <Label position='stacked'>Controls</Label>
              <Link className='router-link' to='/pages/BreadcrumbExample'>
                Breadcrumbs
              </Link>
              <Link className='router-link' to='/pages/ButtonExample'>
                Buttons
              </Link>
              <Link className='router-link' to='/pages/CheckboxExample'>
                Checkboxes
              </Link>
              <Link className='router-link' to='/pages/InputExample'>
                Inputs
              </Link>
              <Link className='router-link' to='/pages/PaginationExample'>
                Pagination
              </Link>
              <Link className='router-link' to='/pages/RadioExample'>
                Radios
              </Link>
              <Link className='router-link' to='/pages/RangeExample'>
                Ranges
              </Link>
              <Link className='router-link' to='/pages/SearchExample'>
                Search
              </Link>
              <Link className='router-link' to='/pages/SelectExample'>
                Select
              </Link>
              <Link className='router-link' to='/pages/TabsExample'>
                Tabs
              </Link>
              <Link className='router-link' to='/pages/ToggleExample'>
                Toggle
              </Link>
            </Item>

            <Item>
              <Label position='stacked'>Containers</Label>
              <Link className='router-link' to='/pages/DrawerExample'>
                Drawers
              </Link>
              <Link className='router-link' to='/pages/DropdownExample'>
                Dropdowns
              </Link>
              <Link className='router-link' to='/pages/ModalExample'>
                Modals
              </Link>
            </Item>

            <Item>
              <Label position='stacked'>Content</Label>
              <Link className='router-link' to='/pages/ColorExample'>
                Colors
              </Link>
              <Link className='router-link' to='/pages/TypographyExample'>
                Typography
              </Link>
            </Item>

            <Item>
              <Label position='stacked'>Layout</Label>
              <Link className='router-link' to='/pages/AppExample'>
                App
              </Link>
              <Link className='router-link' to='/pages/GridExample'>
                Grid
              </Link>
              <Link className='router-link' to='/pages/ListExample'>
                Lists
              </Link>
              <Link className='router-link' to='/pages/TableExample'>
                Tables
              </Link>
            </Item>

            <Item>
              <Label position='stacked'>Informational</Label>
              <Link className='router-link' to='/pages/AlertExample'>
                Alerts
              </Link>
              <Link className='router-link' to='/pages/BadgeExample'>
                Badges
              </Link>
              <Link className='router-link' to='/pages/IconExample'>
                Icon
              </Link>
              <Link className='router-link' to='/pages/LoadingExample'>
                Loading
              </Link>
              <Link className='router-link' to='/pages/ProgressExample'>
                Progress
              </Link>
              <Link className='router-link' to='/pages/TooltipExample'>
                Tooltip
              </Link>
            </Item>
          </ItemGroup>
        </List>
      </Drawer>
    )
  }

  const AppContent = () => {
    return (
      <Switch>
        <Route path='/pages/AlertExample' component={() => <Pages.AlertExample />} />
        <Route path='/pages/AppExample' component={() => <Pages.AppExample />} />
        <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
        <Route path='/pages/BadgeExample' component={() => <Pages.BadgeExample />} />
        <Route path='/pages/BreadcrumbExample' component={() => <Pages.BreadcrumbExample />} />
        <Route path='/pages/ButtonExample' component={() => <Pages.ButtonExample />} />
        <Route path='/pages/CheckboxExample' component={() => <Pages.CheckboxExample />} />
        <Route path='/pages/Colors' component={() => <Pages.ColorExample />} />
        <Route path='/pages/DigitalOrdering' component={() => <Pages.OrderSummary />} />
        <Route path='/pages/DrawerExample' component={() => <Pages.DrawerExample />} />
        <Route path='/pages/DropdownExample' component={() => <Pages.DropdownExample />} />
        <Route path='/pages/GridExample' component={() => <Pages.GridExample />} />
        <Route path='/pages/IconExample' component={() => <Pages.IconExample />} />
        <Route path='/pages/InputExample' component={() => <Pages.InputExample />} />
        <Route path='/pages/ListExample' component={() => <Pages.ListExample />} />
        <Route path='/pages/LoadingExample' component={() => <Pages.LoadingExample />} />
        <Route path='/pages/ModalExample' component={() => <Pages.ModalExample />} />
        <Route path='/pages/PaginationExample' component={() => <Pages.PaginationExample />} />
        <Route path='/pages/ProgressExample' component={() => <Pages.ProgressExample />} />
        <Route path='/pages/RadioExample' component={() => <Pages.RadioExample />} />
        <Route path='/pages/RangeExample' component={() => <Pages.RangeExample />} />
        <Route path='/pages/SearchExample' component={() => <Pages.SearchExample />} />
        <Route path='/pages/SelectExample' component={() => <Pages.SelectExample />} />
        <Route path='/pages/TabsExample' component={() => <Pages.TabsExample />} />
        <Route path='/pages/TableExample' component={() => <Pages.TableExample />} />
        <Route path='/pages/ToggleExample' component={() => <Pages.ToggleExample />} />
        <Route path='/pages/TooltipExample' component={() => <Pages.TooltipExample />} />
        <Route path='/pages/TypographyExample' component={() => <Pages.TypographyExample />} />
      </Switch>
    )
  }

  return (
    <Router>
      <Grid container className='app-container'>
        {/* Navigation */}
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
            <Button variant='outline' onClick={() => setOpened(true)}>
              <Menu />
            </Button>
          </Grid>
          <Grid item>
            <Typography variant='headline'>User Testing</Typography>
          </Grid>
        </Grid>

        <AppDrawer />

        {/* Content */}
        <Grid xs={10}>
          <AppContent />
        </Grid>
      </Grid>
    </Router>
  )
}

export default Application
