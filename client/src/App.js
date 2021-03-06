import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css'
import React, {useState} from 'react';
import BubbleDetails from "./components/Bubble/BubbleDetails";
import DashboardPage from "./views/DashboardPage";
import NavBar from "./components/UI/NavBar";
import BarChart from "./components/UI/BarChart";
import LoginRegistrationPage from "./views/LoginRegistrationPage";
import OnlyTasks from "./components/Bubble/OnlyTasks";
import CurrencyForm from "./components/CurrencyConverter/CurrencyForm";
import BubbleInput from "./components/User/BubbleInput";

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false)


    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <DashboardPage formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>
                    </Route>
                    <Route exact path="/login">
                        <LoginRegistrationPage />
                    </Route>
                    <Route exact path="/jeremy">
                        <BubbleInput />
                    </Route>
                    <Route exact path="/split">
                        <OnlyTasks />
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
