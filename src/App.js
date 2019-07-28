import React from 'react';
import MenuUtama from './pages/MenuUtama';
import MenuProduct from './pages/MenuProduct';
import MenuKontak from './pages/MenuKontak';
import MenuTentangKami from './pages/MenuTentangKami';

function App() {
  return (
    <div className="App">
      <h1>Halaman Header</h1>
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
    </div>
  );
}

export default App;
