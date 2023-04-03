import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Form from "./components/Form";
import UpdateEmployee from "./components/UpdateEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { useGlobalContex } from "./contex";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="employee-list-component">
          <Routes>
            {/**<Form /> */}
            {/** <Employees />*/}

            <Route path="/" exact Component={Employees}></Route>
            <Route path="/employees" Component={Employees}></Route>
             <Route path="/update-employee/:id" Component={UpdateEmployee}></Route>
            <Route path="/form" Component={Form}></Route>
          </Routes>
        </div>
        <div className="footer-component">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
