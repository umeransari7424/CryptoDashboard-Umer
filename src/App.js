import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Boardsidebar from './Components/Layout/Boardsidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import Base from './Components/Layout/Base';
import Home from './Pages/Home';
import Hero from './Components/Elements/Hero';
import Marketplace from './Components/Elements/Marketplace';

function App() {
  return (
    <div >
<BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Hero />} />
          <Route index path="/marketplace" element={<Marketplace />} />
          
        </Routes>
      </Base>
    </BrowserRouter>    </div>
  );
}

export default App;
