import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BookList } from "./Components/BookList";
import "./App.css";

function App() {
  return (
    <div>
    <Navbar />
      <BookList/>
    </div>
  );
}

export default App;
