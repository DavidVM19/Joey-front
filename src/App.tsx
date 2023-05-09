import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import MyAccount from "./components/pages/MyAccount";
import Basket from "./components/pages/Basket";
import Subscriptions from "./components/pages/Subscriptions";
import Blog from "./components/pages/Blog";
import FindAdress from "./components/pages/FindAdress";
import Banner from "./components/layout/Banner";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/myaccount/:user"
            element={<MyAccount />}
            loader={({ params }) => {
              console.log(params.userId);
            }}
            action={({ params }) => {}}
          />
          <Route path="/basket" element={<Basket />} />
          <Route path="/findAdress" element={<FindAdress />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
