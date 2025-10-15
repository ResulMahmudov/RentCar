import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import Category from './pages/Category'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App