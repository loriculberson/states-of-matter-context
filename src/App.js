import { useState } from 'react'
import Solid from './components/Solid'


function App() {
  const [elements, setElements] = useState([
    { id: 1, type: "plasma", name: "lightning"},
    { id: 2, type: "plasma", name: "sun"},
    { id: 3, type: "plasma", name: "stars"},
]);
  return (
    <div className="App">
      <Solid elements={elements}/>
    </div>
  );
}

export default App;
