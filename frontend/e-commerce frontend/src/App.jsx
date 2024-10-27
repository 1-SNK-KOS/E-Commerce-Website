import { Routes , Route } from 'react-router-dom'
import { Home, Login, About, Collection, Contact, Product, Cart, PlaceOrder, Orders } from './pages/index.js'
import {Footer, Navbar, SearchBar} from './components/index.js'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
