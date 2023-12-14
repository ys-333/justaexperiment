import Post from './components/Post/Post'
import Login from './components/Login/Login'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Post />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
