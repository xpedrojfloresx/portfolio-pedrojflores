import "./Footer.css"

export default function Footer(){
    return(
        <footer>
            <div id="contact" className="footer-cta">
                <div className="footer-badge">
                    <span className="footer-dot"></span>
                    <span>Available for work</span>
                </div>
                <h2 className="footer-heading">Let's create your<br />next big idea.</h2>
                <a href="https://wa.me/5491126670018" target="_blank" className="footer-btn">Contact Me</a>
            </div>

            <div className="footer-bottom">
                <span>© 2026 pedrojflores. All rights reserved.</span>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/pedro-flores-dev/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/xpedrojfloresx" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/pedrojflores_/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" />
                    </a>
                    <a href="mailto:pflores0213@gmail.com">
                        <img src="https://cdn.simpleicons.org/gmail" alt="Email" />
                    </a>
                    <a href="https://x.com/pedrojflores_" target="_blank" rel="noreferrer">
                        <img src="https://cdn.simpleicons.org/x" alt="X" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
