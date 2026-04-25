import './App.css'
import Head from '../componants/static/head';
import Header from '../componants/static/header';
import Footer from '../componants/static/footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Head />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App