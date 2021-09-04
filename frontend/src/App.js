import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/pulse/bootstrap.min.css";

import "./App.css";

import ProductoForm from "./components/Productos/ProductoMain";
// import UsersList from "./components/Users/UsersList";
// import UserFindById from "./components/Users/UserFindById";
// import UserEdit from "./components/Users/UserEdit";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="container">
        <Route path="/" exact component={ProductoForm} /> <br />
        {/* <Route path="/" exact component={UsersList} />
        <Route path="/:id" exact component={UserFindById} />
        <Route path="/editar/:id" component={UserEdit} /> */}
      </div>
    </Router>
  );
}

export default App;
