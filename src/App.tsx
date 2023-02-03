import { Switch, Route } from "react-router";
import "./styles/app.scss";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import MyAccount from "./components/pages/MyAccount";
import Basket from "./components/pages/Basket";
import Subscriptions from "./components/pages/Subscriptions";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/subscriptions">
          <Subscriptions />
        </Route>
        <Route path="/:user">
          <MyAccount />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
