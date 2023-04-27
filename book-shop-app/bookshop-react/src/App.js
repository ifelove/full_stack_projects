import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BookList } from "./Components/BookList";
import Addbook from "./Components/Addbook";
import Alert from "./Components/Alert";
import FilterComponent from "./Components/FilterComponent";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { alert, setAlert } = useGlobalContext();
  const { show } = alert;
  return (
    <div>
      <BookList />
      {/** 
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
