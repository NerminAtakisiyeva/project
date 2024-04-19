import React from 'react'
import "./App.css"
import Webrouting from './Webrouting'
import Navigation from './Components/Navigation'
import Bitmap from './Bitmapp/Bitmap'

const App = () => {
  return (
    <div>
      <Navigation />
      <Bitmap />
      <Webrouting />
    </div>
  )
}

export default App