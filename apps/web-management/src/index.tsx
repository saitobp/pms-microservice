import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import Router from './pages/Router'

const queryClient = new QueryClient()

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
)
