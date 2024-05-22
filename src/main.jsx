import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contactus from './components/Contactus.jsx'
import { Route} from 'react-router-dom'
import User from './components/User.jsx'
import Github, { gitHubLoader } from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <><Home/> <Contactus/></>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contactus',
//         element: <Contactus/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path='' element = {<><Home/> <Contactus/></>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contactus' element = {<Contactus/>}/>
      <Route path='user/:id' element = {<User/>}/>
      <Route 
      loader = {gitHubLoader}
      path='github' 
      element = {<Github/>}/>

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
