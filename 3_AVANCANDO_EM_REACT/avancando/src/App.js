import './App.css';

// components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagens em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Paisagem" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
