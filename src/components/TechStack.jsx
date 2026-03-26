const STACKS = [
    {
        category: "Frontend",
        icon: "⬡",
        items: [
            { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
            { name: "HTML", icon: "devicon-html5-plain", color: "#E34F26" },
            { name: "Tailwind", icon: "devicon-tailwindcss-plain", color: "#06B6D4" },
            { name: "Next.js", icon: "devicon-nextjs-plain", color: "#000000" },
        ],
    },
    {
        category: "Backend",
        icon: "⬢",
        items: [
            { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
            { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
            { name: "Java", icon: "devicon-java-plain", color: "#ED8B00" },
            { name: "SQL", icon: "devicon-mysql-plain", color: "#CC2927" },
        ],
    },
    {
        category: "Tooling",
        icon: "◈",
        items: [
            { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
            { name: "GitHub", icon: "devicon-github-original", color: "#181717" },
            { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
        ],
    },
];

export default function TechStack() {
    return (
        <>
            <style>{css}</style>

            <section style={s.section}>
                <span style={s.eyebrow}>Tech Stack</span>
                <h2 style={s.title}>Tools I <em style={s.italic}>work with.</em></h2>

                <div style={s.grid}>
                    {STACKS.map((stack) => (
                        <div key={stack.category} style={s.card}>
                            <div style={s.cardHead}>
                                <span style={s.cardIcon}>{stack.icon}</span>
                                <span style={s.cardCategory}>{stack.category}</span>
                            </div>

                            <div style={s.divider} />

                            <div style={s.items}>
                                {stack.items.map(({ name, icon, color }) => (
                                    <span key={name} style={s.pill} className="stack-pill">
                                        <i className={icon} style={{ fontSize: "14px", color }} />
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #fff; -webkit-font-smoothing: antialiased; }
  .stack-pill:hover { background: #f0fdf4 !important; color: #16a34a !important; border-color: #bbf7d0 !important; }
`;

const s = {
    section: {
        maxWidth: "860px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "'Geist', sans-serif",
    },
    eyebrow: {
        fontSize: "12px", fontWeight: 500, color: "#aaa",
        textTransform: "uppercase", letterSpacing: "0.1em",
        display: "block", marginBottom: "14px",
    },
    title: {
        fontFamily: "'Instrument Serif', serif",
        fontSize: "42px", fontWeight: 400, color: "#0a0a0a",
        lineHeight: 1.1, marginBottom: "32px",
    },
    italic: { fontStyle: "italic", color: "#16a34a" },

    grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "8px",
    },

    card: {
        border: "1px solid #e8e8e8",
        borderRadius: "12px",
        padding: "14px 18px",
        background: "#fafafa",
        display: "flex",
        alignItems: "center",
        gap: "16px",
    },

    cardHead: {
        display: "flex",
        alignItems: "center",
        gap: "7px",
        flexShrink: 0,
        width: "105px",
    },
    cardIcon: { fontSize: "13px", color: "#16a34a" },
    cardCategory: {
        fontSize: "11px", fontWeight: 500, color: "#111",
        textTransform: "uppercase", letterSpacing: "0.08em",
    },

    divider: {
        width: "1px", alignSelf: "stretch",
        background: "#efefef", flexShrink: 0,
    },

    items: {
        display: "flex", flexWrap: "wrap", gap: "6px",
    },

    pill: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "12px", fontWeight: 400, color: "#555",
        border: "1px solid #e8e8e8",
        background: "#fff",
        padding: "4px 12px",
        borderRadius: "100px",
        cursor: "default",
        transition: "all 0.15s",
    },
};
