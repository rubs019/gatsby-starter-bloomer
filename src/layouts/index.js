import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="[DEV] DailyQuote" />
    <Hero isFullHeight id='background'>
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isAlign="centered">
            <TabList>
              <Tab>
                <TabLink>Watch below</TabLink>
              </Tab>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
