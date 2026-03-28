import "./Marquee.css"

const words1 = ["Code", "Test", "Improve", "Design", "Deploy", "Repeat", "Build", "Create"]
const words2 = ["Develop", "Ship", "Iterate", "Launch", "Debug", "Refactor", "Optimize", "Release"]

function MarqueeTrack({ words, reverse, outline }) {
    const tripled = [...words, ...words, ...words]

    return (
        <div className="marquee-wrapper">
            <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
                {tripled.map((word, i) => (
                    <>
                        <span key={`word-${i}`} className={`marquee-word ${outline ? "marquee-outline" : ""}`}>{word}</span>
                        <span key={`dot-${i}`} className={`marquee-dot ${outline ? "marquee-outline" : ""}`}>·</span>
                    </>
                ))}
            </div>
        </div>
    )
}

export default function Marquee() {
    return (
        <div  className="marquee-container">
            <MarqueeTrack words={words1} outline />
            <MarqueeTrack words={words2} reverse />
        </div>
    )
}
