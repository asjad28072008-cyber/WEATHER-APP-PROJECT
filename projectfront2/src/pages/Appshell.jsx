import React from "react";
import BackgroundFX  from "../components/BackgroundFX";
export default function Appshell({children,withNav=true}){
    return(
        <div className="min-h-screen animated-gradient relative">
            <BackgroundFX/>
            <main className="relative z-10">{children}</main>

        </div>
    );
}