import { createBrowserRouter } from 'react-router-dom'

import Pages from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Pages.Home />,
    },
    {
        path: '/users/sign_in',
        element: <Pages.SignIn />,
    },
    {
        path: '/users/sign_up',
        element: <Pages.SignUp />,
    },
])

export default router
