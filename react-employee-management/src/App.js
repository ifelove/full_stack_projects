import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Form from "./components/Form";
//import { useGlobalContex } from "./contex";

import "./App.css";

function App() {

  return (
    <div>
      <Header />
      <div className="employee-list-component">
        <Form />
        {/**<Employees /> */}
      </div>
      <div className="footer-component">
        <Footer />
      </div>
    </div>
  );
}

export default App;
