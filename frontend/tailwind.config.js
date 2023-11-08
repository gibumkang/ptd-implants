/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            "tw-grey": "#121212",
            "tw-active": "#F3E216",
            "tw-inactive": "#606060",
            position: {
                qb: "#E57B7B",
                rb: "#009BD6",
                wr: "#57D600",
                te: "#B369C5",
                dst: "#B369C5",
            },
        },
        fontSize: {
            xxs: "0.7rem",
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
        },
        fontFamily: {
            header: ["Montserrat", "sans-serif"],
            main: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
}
