import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import ProductList from './components/ProductList';

function App() {
  return (
    <>
<Router>
<Header/>
<Routes>
<Route exact path="/" element={<ProductList /> }></Route>
<Route path='/product/:id' element={<ProductDetails/>}></Route>
</Routes>
<Footer/>
</Router>

</>
  );
}

export default App;
