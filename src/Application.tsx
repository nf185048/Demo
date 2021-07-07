import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './Application.css'
import * as Pages from './pages'
import { Grid, Button, Item, Label, Drawer, Typography, ContextItem, ContextMenu } from '@ncr-design-system/react'
import { Menu, } from './assets'

function Application() {
  const [opened, setOpened] = useState(false)

  const AppDrawer = () => {
    return (
      <>
        <Drawer open={opened} placement='left' onHide={() => setOpened(false)}>
          <ContextMenu>

            <Item className='subsection'>
              <Link className='router-link' to='/pages/Info'>
                <ContextItem>
                  About
                </ContextItem>
              </Link>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>App Clones</Typography>
              </Label>

              <Link className='router-link' to='/pages/AppClones'></Link>

              <Link className='router-link' to='/pages/ShoppingPage'>
                <ContextItem>
                  Shopping
                </ContextItem>
              </Link>
              {/* Hidden links for internal routing use */}
              <Link className='router-link' to='/pages/OrderSummary' />
              <Link className='router-link' to='/pages/CheckoutForm' />
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Containers</Typography>
              </Label>

              <Link className='router-link' to='/pages/DrawerExample'>
                <ContextItem>
                  Drawers
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/DropdownExample'>
                <ContextItem>
                  Dropdowns
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/ModalExample'>
                <ContextItem>
                  Modals
                </ContextItem>
              </Link>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Content</Typography>
              </Label>

              <Link className='router-link' to='/pages/ColorExample'>
                <ContextItem>
                  Colors
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/TypographyExample'>
                <ContextItem>
                  Typography
                </ContextItem>
              </Link>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Controls</Typography>
              </Label>

              <Link className='router-link' to='/pages/BreadcrumbExample'>
                <ContextItem>
                  Breadcrumbs
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/ButtonExample'>
                <ContextItem>
                  Buttons
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/CheckboxExample'>
                <ContextItem>
                  Checkboxes
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/InputExample'>
                <ContextItem>
                  Inputs
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/PaginationExample'>
                <ContextItem>
                  Pagination
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/RadioExample'>
                <ContextItem>
                  Radios
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/RangeExample'>
                <ContextItem>
                  Ranges
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/SearchExample'>
                <ContextItem>
                  Search
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/SelectExample'>
                <ContextItem>
                  Select
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/TabsExample'>
                <ContextItem>
                  Tabs
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/ToggleExample'>
                <ContextItem>
                  Toggle
                </ContextItem>
              </Link>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Informational</Typography>
              </Label>

              <Link className='router-link' to='/pages/AlertExample'>
                <ContextItem>
                  Alerts
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/BadgeExample'>
                <ContextItem>
                  Badges
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/IconExample'>
                <ContextItem>
                  Icon
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/LoadingExample'>
                <ContextItem>
                  Loading
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/ProgressExample'>
                <ContextItem>
                  Progress
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/TooltipExample'>
                <ContextItem>
                  Tooltip
                </ContextItem>
              </Link>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Layout</Typography>
              </Label>

              <Link className='router-link' to='/pages/AppExample'>
                <ContextItem>
                  App
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/GridExample'>
                <ContextItem>
                  Grid
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/ListExample'>
                <ContextItem>
                  Lists
                </ContextItem>
              </Link>

              <Link className='router-link' to='/pages/TableExample'>
                <ContextItem>
                  Tables
                </ContextItem>
              </Link>
            </Item>
          </ContextMenu>
        </Drawer>
      </>
    )
  }

  const AppContent = () => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/pages/Home" />}
        />

        <Route path='/pages/AlertExample' component={() => <Pages.AlertExample />} />
        <Route path='/pages/AppExample' component={() => <Pages.AppExample />} />
        <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
        <Route path='/pages/BadgeExample' component={() => <Pages.BadgeExample />} />
        <Route path='/pages/BreadcrumbExample' component={() => <Pages.BreadcrumbExample />} />
        <Route path='/pages/ButtonExample' component={() => <Pages.ButtonExample />} />
        <Route path='/pages/CheckboxExample' component={() => <Pages.CheckboxExample />} />
        <Route path='/pages/CheckoutForm' component={() => <Pages.CheckoutForm />} />
        <Route path='/pages/ColorExample' component={() => <Pages.ColorExample />} />
        <Route path='/pages/DrawerExample' component={() => <Pages.DrawerExample />} />
        <Route path='/pages/DropdownExample' component={() => <Pages.DropdownExample />} />
        <Route path='/pages/GridExample' component={() => <Pages.GridExample />} />
        <Route path='/pages/Home' component={() => <Pages.Home />} />
        <Route path='/pages/IconExample' component={() => <Pages.IconExample />} />
        <Route path='/pages/Info' component={() => <Pages.Info />} />
        <Route path='/pages/InputExample' component={() => <Pages.InputExample />} />
        <Route path='/pages/ListExample' component={() => <Pages.ListExample />} />
        <Route path='/pages/LoadingExample' component={() => <Pages.LoadingExample />} />
        <Route path='/pages/ModalExample' component={() => <Pages.ModalExample />} />
        <Route path='/pages/OrderSummary' component={() => <Pages.OrderSummary />} />
        <Route path='/pages/PaginationExample' component={() => <Pages.PaginationExample />} />
        <Route path='/pages/ProgressExample' component={() => <Pages.ProgressExample />} />
        <Route path='/pages/RadioExample' component={() => <Pages.RadioExample />} />
        <Route path='/pages/RangeExample' component={() => <Pages.RangeExample />} />
        <Route path='/pages/SearchExample' component={() => <Pages.SearchExample />} />
        <Route path='/pages/SelectExample' component={() => <Pages.SelectExample />} />
        <Route path='/pages/ShoppingPage' component={() => <Pages.ShoppingPage />} />
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
          <Grid item justify='flex-start' alignItems='center' style={{ paddingTop: '1em' }}>
            <Link className='router-link' to='/pages/Home'>
              User Testing
            </Link>
          </Grid>
        </Grid>

        <AppDrawer />

        {/* Content */}
        <Grid item xs={11}>
          <AppContent />
        </Grid>
      </Grid>
    </Router>
  )
}

export default Application
