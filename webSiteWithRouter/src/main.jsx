import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { GithubInfoLoader } from './components/github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     children:[
//       {
//         path : "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contactus",
//         element : <ContactUs/>
//       },
//       {
//         path: "user/:uid",
//         element : <User/>
//       },
//       {
//         path: "github",
//         element: <Github/>
//       }
//     ]
//   }
// ])

// another way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='user/:uid' element={<User/>}/>
      <Route
       loader={GithubInfoLoader}
       path='github' 
       element={<Github/>}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
