import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Appart from "../pages/appart";
import Error from "../pages/Error";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/about" element = {<About/>}></Route>
            <Route path="/appart/:id" element = {<Appart/>}></Route>
            <Route path="*" element = {<Error/>}></Route>
        </Routes>
    )
}
export default RoutesApp