/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: "jit",
    purge: [
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
