import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/home-style.css'
import './styles/home-style-large.css'
import Header from '../componants/static/header';
import Footer from '../componants/static/footer';
import { RouterProvider } from 'react-router/dom';
import router from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Header />
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Footer />
  </>
  
)