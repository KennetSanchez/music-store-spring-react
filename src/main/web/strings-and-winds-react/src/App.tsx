import React, {FormEvent, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Account} from "./pages/Account";
import {Cart} from "./pages/Cart";
import {Users} from "./pages/Users";
import {Home} from "./pages/Home";
import {Landing} from "./pages/Landing";
import {Navbar} from "./components/Navbar";
import {Orders} from "./pages/Orders";
import { SignUp } from './pages/SignUp';
import { PublishItem } from './pages/PublisItem';
import { UnknownUrl } from './pages/UnknownUrl';


const App = () => {

    let [isLogged, setIsLogged] = useState(false);
    let [isAdmin, setIsAdmin] = useState(false);
    let [cart, setCart] = useState([]);
    let [cartItemCount, setCartItemCount] = useState(0);

    const handleLogout = (e : React.MouseEvent<HTMLAnchorElement>) => {
        setIsLogged(false);
    }

    return (
      <div className={"h-screen"}>
          <Navbar isLogged={isLogged} isAdmin={isAdmin} handleLogout={handleLogout}/>
          <Routes>
              <Route path={"/"} element={<Landing adminState={[isAdmin, setIsAdmin]} loginState={[isLogged, setIsLogged]}/>}/>
              <Route path={"user/home"} element={<Home/>}/>
              <Route path={"admin/users"} element={<Users/>}/>
              <Route path={"user/cart"} element={<Cart cartState={[cart, setCart]} itemCountState={[cartItemCount, setCartItemCount]}/>}/>
              <Route path={"user/orders"} element={<Orders/>}/>
              <Route path={"user/account"} element={<Account/>}/>
              <Route path={"/sign-up"} element={<SignUp/>}/>
              <Route path={"admin/publish-item"} element={<PublishItem/>}/>
              <Route path={"*"} element={<UnknownUrl/>}/>

          </Routes>
      </div>
  );
}

export default App;
