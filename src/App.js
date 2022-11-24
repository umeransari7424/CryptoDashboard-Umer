import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Boardsidebar from './Components/Layout/Boardsidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import Base from './Components/Layout/Base';
// import Home from './Pages/Home';
import Hero from './Components/Elements/Hero';
import Marketplace from './Components/Elements/Marketplace';
import Games from './Components/Elements/Games';
import Lunacian from './Components/Elements/Lunacian';

function App() {
  return (
    <div >
<BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Hero />} />
          <Route  path="/marketplace" element={<Marketplace />} />
          <Route  path="/game" element={<Games />} />
          <Route  path="/lunacianexpress" element={<Lunacian />} />
          
        </Routes>
      </Base>
    </BrowserRouter>    </div>
  );
}

export default App;
