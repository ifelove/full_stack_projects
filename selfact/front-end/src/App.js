import Navbar from './components/Navbar';
import Landing from './components/landing/Landing';


import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Landing/>
      
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
