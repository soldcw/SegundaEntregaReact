// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemCount from './components/ItemCount/ItemCount'; 
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <NavBar/>
//       <Routes>
//         <Route path='/'element={<ItemListContainer/>}/>
//       <Route path='/cathegory/:categoryId' element= {<ItemListContainer/>}/>
//       <Route path='/item/:itemId' element= { <ItemDetailContainer/>}/>
//       <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
//       </Routes>
//       </BrowserRouter> 
//     </div>
//   );
// }

// export default App;


// App.jsx

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setFilteredProducts={setProductosFiltrados} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
