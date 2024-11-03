import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from "./components/Contact/Contact.jsx";
import ResumeCheck from "./components/ResumeCheck/ResumeCheck.jsx";
import StudyRoom from "./components/StudyRoom/StudyRoom.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='contact' element={<Contact />} />
      <Route path='resumeCheck' element={<ResumeCheck />} />
      <Route path='studyRoom' element={<StudyRoom />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
