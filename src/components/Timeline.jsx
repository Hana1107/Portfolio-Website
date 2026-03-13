import { useState } from "react";

const EDUCATION = [
    {
        id: 1,
        degree: "Los Altos High School",
        school: "Los Altos, CA",
        year: "2017 – 2021",
        desc: "Focused on human-computer interaction and distributed systems. Graduated with Cum Laude.",
        tags: [],
        logo: "../assets/LAHS.jpg",
    },
    {
        id: 2,
        degree: "B.S. Software Engineering",
        school: "San Jose State University",
        year: "2021 – 2025",
        desc: "Focused on human-computer interaction and distributed systems. Graduated with Cum Laude.",
        tags: ["Algorithms", "Web Development", "Systems"],
        logo: "../assets/sjsu.jpg",
    }
];

export default function Timeline() {
    const [hovered, setHovered] = useState(null);

    return (
        <section style={s.section}>
            <style>{css}</style>
            <span style={s.eyebrow}>Education</span>
            <div style={s.timeline}>
                {/* Vertical line */}
                <div style={s.line} />

                {EDUCATION.map((item, i) => (
                    <div
                        key={item.id}
                        style={s.row}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Year — left column */}
                        <div style={s.yearCol}>
                            <span style={{ ...s.year, color: hovered === item.id ? "#16a34a" : "#aaa" }}>
                                {item.year}
                            </span>

                            {/* 👇 THIS IS NEW */}
                            <div style={s.logoWrap}>
                                {item.logo ? (
                                    <img src={item.logo} alt={item.school} style={s.logoImg} />
                                ) : (
                                    <div style={s.logoFallback}>
                                        {item.school.slice(0, 2).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Dot */}
                        <div style={s.dotCol}>
                            <div style={{
                                ...s.dot,
                                background: hovered === item.id ? "#16a34a" : "#e0e0e0",
                                boxShadow: hovered === item.id ? "0 0 0 4px #dcfce7" : "none",
                            }} />
                        </div>

                        {/* Content — right column */}
                        <div style={{
                            ...s.content,
                            opacity: 1,
                            transform: hovered === item.id ? "translateX(6px)" : "translateX(0)",
                        }}
                            className="tl-content"
                        >
                            <div style={s.contentHead}>
                                <h3 style={s.degree}>{item.degree}</h3>
                                <span style={s.school}>{item.school}</span>
                            </div>
                            <p style={s.desc}>{item.desc}</p>
                            <div style={s.tags}>
                                {item.tags.map((t) => (
                                    <span key={t} style={s.tag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #fff; -webkit-font-smoothing: antialiased; }
  .tl-content { transition: transform 0.2s ease; }
`;

const s = {
    section: {
        maxWidth: "720px",
        margin: "0 auto",
        padding: "20px 10px",
        fontFamily: "'Geist', sans-serif",
    },
    eyebrow: {
        fontSize: "15px", fontWeight: 500, color: "black",
        textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "14px",
    },
    title: {
        fontFamily: "'Instrument Serif', serif",
        fontSize: "42px", fontWeight: 400, color: "#0a0a0a",
        lineHeight: 1.1, marginBottom: "56px",
    },
    italic: { fontStyle: "italic", color: "#16a34a" },

    timeline: { position: "relative", display: "flex", flexDirection: "column", gap: "0" },
    line: {
        position: "absolute",
        left: "148px", // aligns with dot column
        top: "8px", bottom: "8px",
        width: "1px",
        background: "linear-gradient(to bottom, #e0e0e0, #f0f0f0)",
    },

    row: {
        display: "flex", alignItems: "flex-start",
        gap: "0", paddingBottom: "44px", cursor: "default",
    },

    yearCol: { width: "130px", flexShrink: 0, paddingTop: "2px" },
    year: { fontSize: "12px", fontWeight: 500, transition: "color 0.2s", letterSpacing: "0.02em" },

    dotCol: {
        width: "36px", flexShrink: 0,
        display: "flex", justifyContent: "center", paddingTop: "5px",
    },
    dot: {
        width: "10px", height: "10px", borderRadius: "50%",
        flexShrink: 0, transition: "background 0.2s, box-shadow 0.2s",
    },

    content: { flex: 1, paddingLeft: "20px" },
    contentHead: { display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px", flexWrap: "wrap" },
    degree: {
        fontFamily: "'Instrument Serif', serif",
        fontSize: "20px", fontWeight: 400, color: "#0a0a0a",
    },
    school: { fontSize: "13px", color: "#aaa", fontWeight: 400 },
    desc: { fontSize: "14px", fontWeight: 300, color: "#666", lineHeight: 1.65, marginBottom: "12px" },
    tags: { display: "flex", gap: "6px", flexWrap: "wrap" },
    tag: {
        fontSize: "11px", fontWeight: 500, color: "#16a34a",
        background: "#f0fdf4", padding: "3px 10px", borderRadius: "100px",
    },
    logoWrap: {
        width: "48px", height: "48px",
        borderRadius: "10px",
        border: "1px solid #e8e8e8",
        background: "#fafafa",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", flexShrink: 0,
    },
    logoImg: {
        width: "32px", height: "32px",
        objectFit: "contain",
    },
    logoFallback: {
        fontSize: "13px", fontWeight: 600,
        color: "#aaa", letterSpacing: "0.05em",
    },
};