import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Account} from "./pages/Account";
import {Login} from "./pages/Login";
import {Cart} from "./pages/Cart";
import {Users} from "./pages/Users";
import {Home} from "./pages/Home";
import {Landing} from "./pages/Landing";
import {Navbar} from "./components/Navbar";
import {Orders} from "./pages/Orders";

function App() {
  return (
      <div className={"app"}>
          <Navbar isLogged={true} isAdmin={false}/>
          <div>
              <Routes>
                  <Route path={"/"} element={<Landing/>}/>
                  <Route path={"/home"} element={<Home/>}/>
                  <Route path={"/users"} element={<Users/>}/>
                  <Route path={"/cart"} element={<Cart/>}/>
                  <Route path={"/orders"} element={<Orders/>}/>
                  <Route path={"/account"} element={<Account/>}/>
                  <Route path={"/login"} element={<Login/>}/>
              </Routes>
          </div>
      </div>
  );
}

export default App;
