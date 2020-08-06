import React from 'react'
import './Heading.css'
import useWebAnimations, { fadeInRight } from "@wellyshen/use-web-animations";

export const Heading = () => {
    const { x } = useWebAnimations({ ...fadeInRight });
    return (
        <div className="heading" ref={x}>
            <h1>Explode with charisma! work with Quark <br></br>and 
                unleash your potential
            </h1>
        </div>
    )
}
