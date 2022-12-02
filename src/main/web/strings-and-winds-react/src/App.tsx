import React, {createContext, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Account} from "./pages/Account";
import {Cart} from "./pages/Cart";
import {Users} from "./pages/Users";
import {Home} from "./pages/Home";
import {Landing} from "./pages/Landing";
import {Navbar} from "./components/Navbar";
import {Orders} from "./pages/Orders";
import { SignUp } from './pages/SignUp';
import { PublishItem } from './pages/PublishItem';
import { UnknownUrl } from './pages/UnknownUrl';
import {Footer} from "./components/Footer";

export const UserToken = React.createContext({
    token: "", 
    setToken:(newToken:string)=>{}
});

const App = () => {


    //function updateToken (newToken : string){state.token = newToken}
    const updateToken = (newToken : string)=>{state.token = newToken}

    const [state, setState] = useState(()=> ({
        token : "",
        setToken : (newToken:string)=>{updateToken(newToken)}
    }))

    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleLogout = (e : React.MouseEvent<HTMLAnchorElement>) => {
        state.setToken("");
    }

    

    return (
        <UserToken.Provider value={state} >
            <div className={"h-full"}>
                <Navbar isAdmin={isAdmin} handleLogout={handleLogout}/>
                <Routes>
                    <Route path={"/"} element={<Landing adminState={[isAdmin, setIsAdmin]}/>}/>
                    <Route path={"user/home"} element={<Home cartState={[cart, setCart]} itemCountState={[cartItemCount, setCartItemCount]}/>}/>
                    <Route path={"admin/users"} element={<Users/>}/>
                    <Route path={"user/cart"} element={<Cart cartState={[cart, setCart]} itemCountState={[cartItemCount, setCartItemCount]}/>}/>
                    <Route path={"user/orders"} element={<Orders/>}/>
                    <Route path={"user/account"} element={<Account/>}/>
                    <Route path={"/sign-up"} element={<SignUp/>}/>
                    <Route path={"admin/publish-item"} element={<PublishItem/>}/>
                    <Route path={"*"} element={<UnknownUrl/>}/>
                </Routes>
        </div>
      </UserToken.Provider>
  );
}

export default App;
