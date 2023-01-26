import React from 'react'

import { ExampleComponent } from 'sharkui'
import { Button } from 'sharkui'
import 'sharkui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Button text='Click Button text' selfClickEvent={(e)=>{console.log(e.target)}} />
    </>
  )
}

export default App
