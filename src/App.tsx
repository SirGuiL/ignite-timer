import { Button } from './components/Button/Button'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button text="teste" variant="primary" />
      <Button text="teste" variant="secondary" />
      <Button text="teste" variant="success" />
      <Button text="teste" variant="danger" />
      <Button text="teste" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
