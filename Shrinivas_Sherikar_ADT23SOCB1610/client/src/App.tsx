
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

import ProtectedRoute from './components/ProtectedRoute'
import PublicOnlyRoute from './components/PublicOnlyRoute'
import Board from './pages/Board'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
          
         <div
        className="absolute inset-x-0 top-0 z-0 pointer-events-none"
        style={{
          height: '100vh',
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168, 165, 255, 0.20), transparent 70%)",
        }}
      />
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />

            <Route
              path='/login'
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />
            <Route
              path='/register'
              element={
                <PublicOnlyRoute>
                  <Signup />
                </PublicOnlyRoute>
              }
            />
            <Route
              path='/board'
              element={
                <ProtectedRoute>
                  <Board />
                </ProtectedRoute>
              }
            />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}