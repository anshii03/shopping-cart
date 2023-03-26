import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Products } from "./pages/Products"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Products" element={<Products />}></Route>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
