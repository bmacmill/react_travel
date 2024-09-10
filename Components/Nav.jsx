import React from "react"

import { FaGlobeAmericas } from "react-icons/fa";


export default function Nav() {
    return (
        <nav className="Nav">
            <FaGlobeAmericas className="nav-icon" icon={FaGlobeAmericas} />
            <h1>my travel journal.</h1>
        </nav>
    )
}