import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/main.css'


import {Main, Notice, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons/index";
import {CustomerInfo, Mypage, Order, Payment, Statistics,GoogleMapClass} from "./CompanyPage";
import {Signup,Login} from "./Account";

const Home = () => {
    return(
        <>
            <Navigator/>

                <Switch>
                    <Route exact path={"/"}>
                        <Main/>
                    </Route>


                    <Route path="/login" >
                        <Login/>
                    </Route>

                    <Route path="/signup" >
                        <Signup/>
                    </Route>

                    <Route path="/mypage" >
                        <Mypage/>
                    </Route>

                    <Route path="/order" >
                        <Order/>
                    </Route>

                    <Route path="/payment">
                        <Payment/>
                    </Route>

                    <Route path="/statistics">
                        <Statistics/>
                    </Route>

                    <Route path="/customerinfo">
                        <CustomerInfo/>
                    </Route>
                    <Route path={"/notice"} component={Notice}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                </Switch>
            <Footer/>
        </>
    )
}

export default Home;
