import React from 'react'

import Home from "./view-components/Home"
import { ViewProvider } from "./context/AppContext"

import "./styles/index.scss"
import "./styles/palette.scss"
import "./styles/fonts.scss"
import "./styles/elements.scss"

const App = () => {
  return (
    <ViewProvider>
      <Home />
    </ViewProvider>
  )
}

export default App