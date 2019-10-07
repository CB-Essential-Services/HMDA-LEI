import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './components/HomepageLayout'
import HomepageHeading from './components/HomepageHeading'
import DesktopContainer from './components/DesktopContainer'
import MobileContainer from './components/MobileContainer'
import PropTypes from 'prop-types'
import { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  return (
    <div className="App">
      <ResponsiveContainer>
        <HomepageLayout />
      </ResponsiveContainer>
    </div>
  );
}

export default App;
