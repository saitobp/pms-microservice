import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { basicTheme } from '@pms-microservices/theme'

import './resetStyles.css'

import Router from './pages/Router'

render(
    <StrictMode>
        <ThemeProvider theme={basicTheme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root'),
)
