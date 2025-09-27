import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandindPage from './components/LandindPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Scheduletour from './components/scheduletour'
import { ThinkBuild } from './components/ThinkBuild'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandindPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/schedule-tour",
        element: <Scheduletour />
    },
    {
        path: "/think-build",
        element: <ThinkBuild />
    },
])

const Routing = () => {
    return <RouterProvider router={router} />
}

export default Routing
