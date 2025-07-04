import { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

export default function Fact_Card({
    titleFontSize = "40px",
    bodyFontSize = "20px",
    buttonFontSize = "16px",
    iconSize = "18",
}) {
    const [fact, setFact] = useState("Loading...")
    const [isLoading, setIsLoading] = useState(false)
    const [fade, setFade] = useState(true)

    const fetchFact = () => {
        setIsLoading(true)
        setFade(false)

        setTimeout(() => {
            fetch("https://websitefacts.vercel.app/api/fact")
                .then((res) => res.json())
                .then((data) => {
                    setFact(data.fact)
                    setFade(true)
                })
                .catch((err) => {
                    console.error("Failed to fetch fact:", err)
                    setFact("Unable to load a fact right now.")
                    setFade(true)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }, 300)
    }

    useEffect(() => {
        fetchFact()
    }, [])

    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div
                style={{
                    border: "1px solid #FFF7E8",
                    borderRadius: "8px",
                    padding: "20px",
                    color: "#FFF7E8",
                    backgroundColor: "transparent",
                    fontFamily: "Manrope, sans-serif",
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    transition: "opacity 0.5s ease",
                    opacity: fade ? 1 : 0,
                }}
            >
                <h2
                    style={{
                        fontSize: titleFontSize,
                        margin: 0,
                        fontWeight: 400,
                        lineHeight: 1.2,
                    }}
                >
                    The more you know…
                </h2>
                <p
                    style={{
                        fontSize: bodyFontSize,
                        fontWeight: 500,
                        margin: 0,
                        lineHeight: "1.4",
                    }}
                >
                    {fact}
                </p>
                <button
                    onClick={fetchFact}
                    disabled={isLoading}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "none",
                        border: "none",
                        color: "#FFF7E8",
                        fontSize: buttonFontSize,
                        fontFamily: "Manrope, sans-serif",
                        cursor: isLoading ? "not-allowed" : "pointer",
                        padding: 0,
                        marginTop: "8px",
                        textDecoration: "underline",
                        alignSelf: "flex-start",
                        opacity: isLoading ? 0.5 : 1,
                    }}
                >
                    {isLoading ? "Loading..." : "Load another fact"}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={iconSize}
                        height={iconSize}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFF7E8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            animation: isLoading
                                ? "spin 1s linear infinite"
                                : "none",
                        }}
                    >
                        <polyline points="23 4 23 10 17 10" />
                        <polyline points="1 20 1 14 7 14" />
                        <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0020.49 15" />
                    </svg>
                </button>
            </div>
        </>
    )
}

addPropertyControls(Fact_Card, {
    titleFontSize: {
        type: ControlType.String,
        title: "Title Font Size",
        defaultValue: "40px",
    },
    bodyFontSize: {
        type: ControlType.String,
        title: "Body Font Size",
        defaultValue: "20px",
    },
    buttonFontSize: {
        type: ControlType.String,
        title: "Button Font Size",
        defaultValue: "16px",
    },
    iconSize: {
        type: ControlType.String,
        title: "Icon Size (px)",
        defaultValue: "18",
    },
})
