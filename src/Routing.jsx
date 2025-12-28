import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandindPage from './components/LandindPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Scheduletour from './components/scheduletour'
import Dashboard from './components/Dashboard'

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
        path: "/dashboard",
        element: <Dashboard />
    }
])

const Routing = () => {
    return <RouterProvider router={router} />
}

export default Routing
