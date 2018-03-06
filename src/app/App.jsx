import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Container from './Container'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3f50b5',
    primary2Color: '#757ce8',
    primary3Color: '#002884',
    accent1Color: '#f44336',
    accent2Color: '#ff7961',
    accent3Color: 'ba000d',
    textColor: '#000',
    alternateTextColor: '#fff'
  }
})

const App = props => <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
  <Container />
</MuiThemeProvider>

export default App
