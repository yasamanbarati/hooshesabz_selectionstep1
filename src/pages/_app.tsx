import type { AppProps } from 'next/app'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/setup/theme'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
