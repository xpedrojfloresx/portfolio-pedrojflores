import { useState } from "react"
import "./Speciality.css"
import computerIMG from "../../assets/computerIMG.png"
import gameIMG from "../../assets/gameIMG.png"
import threejsIMG from "../../assets/threejsIMG.png"

const specialities = [
    {
        label: "Full Stack Web Development",
        description: "Developing high-performance, scalable web applications that combine robust back-end logic with modern, responsive front-end architectures.",
        img: computerIMG
    },
    {
        label: "Virtual Simulations & 3D Web",
        description: "Engineering immersive 3D environments and virtual simulations that push the boundaries of the browser through spatial design and real-time interaction.",
        img: threejsIMG
    },
    {
        label: "Game Design & Logic",
        description: "Crafting intuitive game mechanics and gamified systems that transform complex digital interactions into engaging, user-centered experiences.",
        img: gameIMG
    }
]

export default function Speciality() {
    const [selected, setSelected] = useState(specialities[0])

    return (
        <div className="div-specs mt-5">
            <div>
                <h4 className="mb-2">SPECIALITY</h4>
                <h1 className="d-flex">Areas of Expertise</h1>
            </div>

            <div className="specs-content">
                <div className="specs-list">
                    {specialities.map((item) => (
                        <div key={item.label} className="spec-block">
                            <p
                                className={`spec-item ${selected?.label === item.label ? "spec-active" : ""}`}
                                onClick={() => setSelected(selected?.label === item.label ? null : item)}
                            >
                                {item.label}
                            </p>
                            <p className={`spec-description ${selected?.label === item.label ? "spec-description-visible" : ""}`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`specs-image ${selected ? "specs-image-visible" : ""}`}>
                    {selected && (
                        <img src={selected.img} alt={selected.label} />
                    )}
                </div>
            </div>
        </div>
    )
}
