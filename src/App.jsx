import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
[{
    path:'/',
    element:<h1>home</h1>,
  },
{
  path:'/about',
  element:<div><h1>about page</h1></div>,
}
])

const App = () => {
  return (
    <h1>
     Jobify App
    </h1>
  )
}

export default App
