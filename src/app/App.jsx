import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Container from './Container'

const App = (props) => <MuiThemeProvider>
  <Container />
</MuiThemeProvider>

export default App
