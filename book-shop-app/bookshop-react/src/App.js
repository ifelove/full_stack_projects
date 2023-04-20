import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BookList } from "./Components/BookList";
import Addbook from "./Components/Addbook";
import Alert from "./Components/Alert";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { alert, setAlert } = useGlobalContext();
  const { show } = alert;
  return (
    <div>
      <Navbar />

      <Alert />
      <BookList />
      {/** 
       *   <Addbook />
       *  <Home />
       * x
     
      */}
    </div>
  );
}

export default App;
