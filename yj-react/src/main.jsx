import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import NotFound from './routes/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, // Outlet : 루트 밑에 있는 자식들(children)을 나오게 해준다.
    errorElement: <NotFound />,
    children: [
      {
        path: "", // 루트에서 아무것도 없으면 메인페이지
        element: <MainPage />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
