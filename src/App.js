import React, { Component } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Ads from "./components/Ads";
import Card from "./components/Card";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Navbar />
                <Ads />
                <Card />

                {/* <h1>Running! Good luck</h1> */}
            </div>
        );
    }
}

export default App;

//! Notes:
//*  Logo Cont Left side,
//*  Search cont middle,
//*  Avatar cont right side,
//!  Add Hover style to nav Buttons,
