import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout, Projects, Home, Contact, SocialMedia, githubInfoLoader } from './components'
import ThemeContextProvider from './context/ThemeProvider'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
      <Route
        path='social-media'
        element={<SocialMedia />}
        loader={githubInfoLoader}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
