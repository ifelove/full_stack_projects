import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BookList } from "./Components/BookList";
import Addbook from "./Components/Addbook";
import Alert from "./Components/Alert";
import FilterComponent from "./Components/FilterComponent";
import Footer from "./Components/Footer";
import Updatebook from "./Components/Updatebook";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";

function App() {
  const { alert, setAlert } = useGlobalContext();
  const { show } = alert;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/booklist" Component={BookList}></Route>
          <Route path="/addbook" Component={Addbook}></Route>
          <Route path="/updatebook/:id" Component={Updatebook}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/*
   
       *  <Addbook />
       *<FilterComponent />
       *   <Navbar />
       *
       * <Alert />
       *
       *  <Home />
       *
       */}
    </div>
  );
}

export default App;
