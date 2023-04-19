import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BookList } from "./Components/BookList";
import Addbook from "./Components/Addbook";
import Alert from "./Components/Alert";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Alert />
      </div>

      {/** 
       *   <Addbook />
       *  <Home />
       * <BookList />
     
      */}
    </div>
  );
}

export default App;
