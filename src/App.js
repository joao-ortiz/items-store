import ItemSection from './Components/ItemSection'
import Header from './Components/Header'
import Inventory from './Components/Inventory'
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('all')
  return (
    <div className="App">
      <Header setSection={setSection} section={section} sections={sections} />
      <ItemSection section={section} />
      <Inventory />
    </div>
  );
}

export default App;
