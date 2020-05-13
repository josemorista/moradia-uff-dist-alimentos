import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Root from './components/Root'
import { Container, CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    type: 'dark',
  },
})

export default function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth={'xl'}>
        <CssBaseline />
        <Root />
      </Container>
    </MuiThemeProvider>
  )
}
