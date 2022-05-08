import React from "react";

export default function Header() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src="./logo192.png" className="nav-logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
