import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Pagetransition from "./Pagetransition";

export default function Layoutwithnavbar(){
    return(
        <Pagetransition>
        <>
        <Navbar/>
        <Outlet/>
        </>
        </Pagetransition>
    );
};