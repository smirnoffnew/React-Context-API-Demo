import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./themeContext";

export default function Nav(props) {
    return (
        <ThemeContext.Consumer>
            {context => (
                <nav>
                    <div className="nav-content-wrapper">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <label htmlFor="theme-selector">Select Theme</label>
                        <select id="theme-selector" onChange={context.selectTheme}>
                            <option value="light">light</option>
                            <option value="dark">dark</option>
                            <option value="sky">sky</option>
                        </select>
                    </div>
                </nav>
            )}
        </ThemeContext.Consumer>
    );
}
