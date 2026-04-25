import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/home-style.css'
import './styles/home-style-large.css'
import Head from '../componants/static/head';
import Header from '../componants/static/header';
import Footer from '../componants/static/footer';
import { RouterProvider } from 'react-router/dom'  // ← Change this import
import router from './scripts/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Head />
    <Header />
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Footer />
  </>
  
)