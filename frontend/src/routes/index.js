import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Categoria from "../pages/Categoria";
import Produto from "../pages/Produto";
import Contato from "../pages/Contato";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contato" component={Contato} />
        <Route exact path="/categorias" component={Categoria} />
        <Route exact path="/categorias/:categoria" component={Categoria} />
        <Route
          exact
          path="/categorias/:categoria/:produto"
          component={Produto}
        />
        <Route path="/produtos" component={Produto} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
