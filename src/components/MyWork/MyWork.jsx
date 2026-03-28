import './MyWork.css';
import dilloAvatar from '../../assets/Dillo-Avatar.png'
import businessCard from '../../assets/GameKeys.png'
import ecommerce from '../../assets/Ecommerce-Demo.png'
import pctImg from '../../assets/pct-img.png'

const projects = [
    {
        title: "Dillo Avatar",
        status: "Deployed",
        statusColor: "#4ade80",
        image: dilloAvatar,
        github: "https://github.com/dillo-ai/dillo.avatar",
        live: "https://avatar.dillo.ai/",
        target: "_blank"
    },
    {
        title: "PCT - Videogame",
        status: "In Progress",
        statusColor: "#facc15",
        image: pctImg,
        github: "https://github.com/NicoAlvarez13/proyectoPlaza",
        live: "",
        target: "#work"
    },
    {
        title: "GameKeys - E-commerce Frontend",
        status: "Deployed",
        statusColor: "#4ade80",
        image: businessCard,
        github: "https://github.com/xpedrojfloresx/ecommerce-front-demo",
        live: "https://xpedrojfloresx.github.io/ecommerce-front-demo/",
        target: "_blank"
    },
    {
        title: "Monorepo E-commerce",
        status: "Deployed",
        statusColor: "#4ade80",
        image: ecommerce,
        github: "https://github.com/xpedrojfloresx/ecommerce-monorepo-demo",
        live: "https://ecommerce-monorepo-demo.onrender.com/",
        target: "_blank"
    }
]

export default function MyWork() {
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
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className='work-card-footer'>
                            <div className='work-card-info'>
                                <h5>{project.title}</h5>
                                <span className='work-status' style={{ color: project.statusColor }}>
                                    {project.status}
                                </span>
                            </div>
                            <div className='work-card-links'>
                                <a href={project.github} target='_blank' rel='noreferrer' className='work-btn'>
                                    <img src='https://cdn.simpleicons.org/github/white' alt='github' width={18} />
                                </a>
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
        </div>
    )
}
