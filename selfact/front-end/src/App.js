import Navbar from './components/Navbar';
import Landing from './components/landing/Landing';
import Login from "./components/user/Login"


import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './components/user/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Landing}></Route>
          <Route path="/register" exact Component={Register}></Route>
          <Route path="/login" exact Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    /** 
 * 
 * 
 *  <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
 * 
 * 
*/
  );
}

export default App;
