import ItemSection from './Components/ItemSection'
import Header from './Components/Header'
import Inventory from './Components/Inventory'
import { useState } from 'react';
import InventoryContextProvider from './Contexts/InventoryContext'
import ItemsContextProvider from './Contexts/ItemsContext';

function App() {
  const [section, setSection] = useState('all')
  const sections = ['Weapon','Armor']
  return (
    <div className="App">
      <Header setSection={setSection} section={section} sections={sections} />
      <InventoryContextProvider>
        <ItemsContextProvider>
          <ItemSection section={section} />
          <Inventory />
        </ItemsContextProvider>
      </InventoryContextProvider>
    </div>
  );
}

export default App;
