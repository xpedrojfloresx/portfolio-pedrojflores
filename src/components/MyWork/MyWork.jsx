import { useEffect, useState } from 'react'
import './MyWork.css';
import dilloAvatar from '../../assets/Dillo-Avatar.png'
import adnDigital from '../../assets/AdnDigital.png'
import dilloWeb from '../../assets/Dillo-Web.png'
import claroImg from '../../assets/Claro-Atencion.png'
import talleresImg from '../../assets/Gestion-Talleres.png'
import pluginImg from '../../assets/Dillo-Avatar-Plugin.png'

const projects = [
    {
        title: "Dillo Avatar",
        status: "Deployed",
        statusColor: "#4ade80",
        image: dilloAvatar,
        live: "https://avatar.dillo.ai/",
        target: "_blank"
    },
    {
        title: "AdnDigital",
        status: "Deployed",
        statusColor: "#4ade80",
        image: adnDigital,
        live: "https://adndigital.biz/new/",
        target: "_blank"
    },
    {
        title: "Dillo",
        status: "Deployed",
        statusColor: "#4ade80",
        image: dilloWeb,
        live: "https://dillo.ai/",
        target: "_blank"
    },
    {
        title: "Claro · Atención inclusiva",
        status: "Deployed",
        statusColor: "#4ade80",
        image: claroImg,
        live: "https://dillo.ar/claro/",
        target: "_blank"
    },
    {
        title: "Dillo Avatar Plugin",
        status: "Deployed",
        statusColor: "#4ade80",
        image: pluginImg,
        imagePosition: "right",
        live: "https://lse.dillo.ar/demo-aeropuertos",
        target: "_blank"
    },
    {
        title: "Gestión de Talleres",
        status: "Deployed",
        statusColor: "#4ade80",
        image: talleresImg
    }
]

export default function MyWork() {
    const [zoomed, setZoomed] = useState(null)

    useEffect(() => {
        if (!zoomed) return
        const onKey = (e) => { if (e.key === 'Escape') setZoomed(null) }
        document.addEventListener('keydown', onKey)
        window.lenis?.stop()
        return () => {
            document.removeEventListener('keydown', onKey)
            window.lenis?.start()
        }
    }, [zoomed])

    return (
        <div id='work'className='work-specs mt-5'>
            <div className='work-header'>
                <h4 className='mb-2'>MY WORK</h4>
                <h1 className='mb-2'>Selected Projects</h1>
                <p className='greyText'>Here's a curated selection showcasing my expertise and the results I've delivered through real-world projects.</p>
            </div>

            <div className='work-grid'>
                {projects.map((project, i) => (
                    <div key={i} className='work-card'>
                        <div className='work-card-img'>
                            {project.image
                                ? <button type='button' className='work-card-zoom' aria-label={`Enlarge ${project.title} image`} onClick={() => setZoomed(project)}>
                                    <img src={project.image} alt={project.title} style={{ objectPosition: project.imagePosition }} />
                                </button>
                                : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(128, 128, 128, 0.12)', color: '#888' }}>Preview coming soon</div>}
                        </div>
                        <div className='work-card-footer'>
                            <div className='work-card-info'>
                                <h5>{project.title}</h5>
                                <span className='work-status' style={{ color: project.statusColor }}>
                                    {project.status}
                                </span>
                            </div>
                            <div className='work-card-links'>
                                <a {...(project.live ? { href: project.live, target: project.target, rel: 'noreferrer' } : {})} className='work-btn' style={!project.live ? { opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' } : {}}>
                                    <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zm-1 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8h-2v8H5V7h8V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='btn-moreprj'>
                <a href='https://github.com/xpedrojfloresx' target='_blank' rel='noreferrer' className='moreprj-btn'>
                    <img src='https://cdn.simpleicons.org/github/white' alt='github' width={18} />
                    More Proyects on Github
                </a>
            </div>

            {zoomed && (
                <div className='work-lightbox' role='dialog' aria-modal='true' aria-label={zoomed.title} onClick={() => setZoomed(null)}>
                    <button type='button' className='work-lightbox-close' aria-label='Close' autoFocus>×</button>
                    <img src={zoomed.image} alt={zoomed.title} />
                </div>
            )}
        </div>
    )
}
