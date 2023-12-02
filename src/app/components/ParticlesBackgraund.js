import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import particlesConfig from "../config/particles-config";

const ParticlesBackgraund = () => {
    const paticlesInit = useCallback(async (engine) => {
        console.log(engine)
        await loadFull(engine)
    }, []); 

    const particlesLoaded = useCallback(async ( container ) => {
        console.log(container)
    }, []);
    return (
        <div id="particle-background">
            <Particles
            id="tsparticles"
            particlesLoaded='particlesLoaded'
            init={paticlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            height="100vh"
            width="100vw"
            ></Particles>
        </div>
    );
};

export default ParticlesBackgraund
