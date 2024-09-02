import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./components/Home"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BagSum } from './components/BagSum.jsx'
import { Bag } from './components/Bag.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'

const router = createBrowserRouter([
  { path: "/", element : <App /> ,
    children: [
      { path: "/" , element: <Home key="home" /> }, 
      { path: "/bag", element: <Bag key="bag" /> },
    ]}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
