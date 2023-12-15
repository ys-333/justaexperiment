import Post from './components/Post/Post'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'post',
        element: <Post />,
      },
    ],
  },
])

export default router
