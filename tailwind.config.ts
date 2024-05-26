import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"

// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
    content: [
        "./src/**/*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
} satisfies Config
