import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Account} from "./pages/Account";
import {Cart} from "./pages/Cart";
import {Users} from "./pages/Users";
import {Home} from "./pages/Home";
import {Landing} from "./pages/Landing";
import {Navbar} from "./components/Navbar";
import {Orders} from "./pages/Orders";

const App = () => {

    let [isLogged, setIsLogged] = useState(false);
    let [isAdmin, setIsAdmin] = useState(false);

    const handleLogout = (e : React.MouseEvent<HTMLAnchorElement>) => {
        setIsLogged(false);
    }

    return (
      <div className={"h-screen"}>
          <Navbar isLogged={isLogged} isAdmin={isAdmin} handleLogout={handleLogout}/>
          <Routes>
              <Route path={"/"} element={<Landing/>}/>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/users"} element={<Users/>}/>
              <Route path={"/cart"} element={<Cart/>}/>
              <Route path={"/orders"} element={<Orders/>}/>
              <Route path={"/account"} element={<Account/>}/>
          </Routes>
      </div>
  );
}

export default App;
