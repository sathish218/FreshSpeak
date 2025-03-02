import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Join from './Join.jsx'
import About from './About.jsx'


const router = createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"form",
        element:<Form/>
      },
      {
        path:"join",
        element:<Join/>
      },
      {
        path:"about",
        element:<About/>
      }
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
       {/* <App /> */}
       <RouterProvider router={router}/>

  </StrictMode>,
)
