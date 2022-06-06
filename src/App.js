import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListConteiner from './components/ItemListContainer/ItemsListConteiner';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        {/* <div className='div1'></div> */}
        <img alt='img-header' className='div1 img-fluid' src='/img/img-index/LiveFire_Hero7.webp'></img>
        <Routes>
          {/* <Card /> */}
          {/* <ItemListConteiner /> */}
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/' element={<ItemDetailConteiner />} /> 
        
          {/* <ItemListConteiner gretting=" Hola A Todos!!"/> */}
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
