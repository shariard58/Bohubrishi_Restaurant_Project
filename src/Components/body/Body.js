import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes, Redirect, Navigate } from "react-router";




const Body = () => {
    return (

        <div>

            {/* <Menu /> */}

            <Routes>

                <Route path="/" exact element={Home} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={Contact} />
                <Route path="/about" exact element={About} />
                <Route path="/" element={<Navigate replace to="/home" />} />

            </Routes>
            {/* <Redirect from="/" to="/home" /> */}

        </div>
    );
}


export default Body;