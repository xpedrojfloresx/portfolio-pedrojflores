import { useState, useEffect } from "react"
import "./MainContent.css"

const roles = ["Frontend Developer", "Tech Enthusiast", "React Developer"]

export default function MainContent() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setRoleIndex(prev => (prev + 1) % roles.length)
                setVisible(true)
            }, 500)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main id="home" className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5" style={{ minHeight: "calc(100vh - 76px)", padding: "10rem 1rem 2rem 1rem" }}>
            <div className="me-info text-center">
                <p className="mb-2">I'm a</p>
                <h2 className={`role-text ${visible ? "role-visible" : "role-hidden"}`}>{roles[roleIndex]}</h2>
                <p className="greyText">Based in Cordoba</p>
            </div>
            <div className="main-title text-center">
                <h1>PORTFOLIO</h1>
                <img src="" alt="" />
                <h1>pedrojflores</h1>
            </div>
            <div className="about-info text-center">
                <p className="greyText">From web architecture to virtual simulations — I craft digital experiences that stand out</p>
                <a href="/public/CV-PedroFlores.pdf" download>
                    <button type="button" className="btn btn-primary">Download Resume</button>
                </a>
            </div>
        </main>
    )
}