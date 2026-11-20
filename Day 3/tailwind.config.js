
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./Day 3/index.html"],
    theme: {
        extend: {
            colors: {
                ali: "#2563eb",
                abdullah: "#16a34a",
                wajih: "#9333ea",
            },
            screens: {
                ssm: "30rem",
                laptop: "1024px",
                desktop: "1280px",
                wide: "1536px",
                xm: "112rem",
            },
        },
    },
    plugins: [],
};
