import { useState } from "react"
import "./Navbar.css"
import logoPedro from "../../assets/logoPedro.png"

const THEME_KEY = "theme"

// The inline script in index.html sets data-theme on <html> before first paint.
function getInitialTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
}

export default function Navbar() {
    const [theme, setTheme] = useState(getInitialTheme)
    const nextTheme = theme === "dark" ? "light" : "dark"

    function toggleTheme() {
        document.documentElement.setAttribute("data-theme", nextTheme)
        try {
            localStorage.setItem(THEME_KEY, nextTheme)
        } catch {
            // storage unavailable (private mode, blocked): theme still applies for this visit
        }
        setTheme(nextTheme)
    }

    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme={theme}>
            <div class="navbar-elements container-fluid">
                <a class="navbar-brand" href="#"><img src={logoPedro} alt="" width={"60 px"} /></a>
                <div className="navbar-actions order-lg-last">
                    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}>
                        {theme === "dark" ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link" aria-current="page" href="#home">Home</a>
                        <a class="nav-link" href="#about">About</a>
                        <a class="nav-link" href="#work">Works</a>
                        <a class="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
