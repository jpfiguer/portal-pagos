cat > tailwind.config.js <<'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        symBlue: "#0B3C6D",
        symOrange: "#F28C28",
        symGray: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
EOF