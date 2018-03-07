import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Container from './Container'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3f50b5',
    primary2Color: '#757ce8',
    primary3Color: '#002884',
    accent1Color: '#00c853',
    accent2Color: '#5efc82',
    accent3Color: '#009624',
    textColor: '#000',
    alternateTextColor: '#fff'
  }
})

const App = props => <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
  <Container />
</MuiThemeProvider>

export default App
