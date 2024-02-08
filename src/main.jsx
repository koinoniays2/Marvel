import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import NotFound from './routes/NotFound.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Characters from './routes/Characters.jsx'
import Comics from './routes/Comics.jsx'
import CharacterDetail from './routes/CharacterDetail.jsx'
import ComicsDetail from './routes/ComicsDetail.jsx'
import Email from './routes/Email.jsx'
import Munhwa from './routes/Munhwa.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, // Outlet : 루트 밑에 있는 자식들(children)을 나오게 해준다.
    errorElement: <NotFound />,
    children: [
      {
        path: "", // 루트에서 아무것도 없으면 메인페이지
        element: <MainPage />
      },
      {
        path: "characters",
        element: <Characters />
      },
      {
        path: "comics",
        element: <Comics />
      },
      {
        path: "characters/:id",
        // 주소 뒤에 오는것을 id변수로 받는다
        element: <CharacterDetail />
      },
      {
        path: "comics/:id",
        element: <ComicsDetail />
      },
      {
        path: "email",
        element: <Email />
      },
      {
        path: "munhaw",
        element: <Munhwa />
      }
    ]
  }
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
     </QueryClientProvider>
  </React.StrictMode>,
)
