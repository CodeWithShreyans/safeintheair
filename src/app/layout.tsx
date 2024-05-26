import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { Link } from "@nextui-org/react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import NextLink from "next/link"
import Script from "next/script"
import { Providers } from "./providers"

export const metadata: Metadata = {
    authors: [
        {
            name: siteConfig.creatorName,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.creatorName,
    description: siteConfig.description,
    formatDetection: { email: true, telephone: true },
    keywords: siteConfig.baseKeywords,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        description: siteConfig.description,
        locale: "en_US",
        siteName: siteConfig.siteName,
        title: siteConfig.siteName,
        type: "website",
        url: siteConfig.url,
    },
    robots: {
        follow: true,
        googleBot: {
            follow: true,
            index: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
        index: true,
    },
    title: siteConfig.siteName,
    twitter: {
        card: "summary_large_image",
        creator: "@CodeWShreyans",
        description: siteConfig.description,
        site: "@CodeWShreyans",
        title: siteConfig.siteName,
    },
}

export const viewport: Viewport = {
    themeColor: [
        { color: "white", media: "(prefers-color-scheme: light)" },
        { color: "black", media: "(prefers-color-scheme: dark)" },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <Providers className="h-screen">
                    <header className="absolute top-0 text-center w-full text-6xl font-bold font-mono p-4">
                        <NextLink
                            // as={NextLink}
                            href="/"
                            // isBlock={true}
                            className="hover:opacity-75 transition-all"
                        >
                            Safe in the Air?
                        </NextLink>
                    </header>

                    <main className="flex min-h-screen flex-col items-center justify-center text-white">
                        {children}
                    </main>
                    <footer className="absolute bottom-0 w-full text-lg p-4">
                        Made by{" "}
                        <Link
                            as={NextLink}
                            href="https://shreyans.sh"
                            isExternal={true}
                            className="text-inherit underline underline-offset-2 text-lg"
                        >
                            Shreyans Jain
                        </Link>
                        ; Inspired by{" "}
                        <Link
                            as={NextLink}
                            href="https://en.wikipedia.org/wiki/Boredom"
                            isExternal={true}
                            className="text-inherit underline underline-offset-2 text-lg"
                        >
                            Boredom
                        </Link>
                        .
                    </footer>
                </Providers>
                <Script
                    async={true}
                    data-website-id="958ed8b1-6d14-4a94-848a-e75533b55f43"
                    src="https://umami.shreyans.sh/script.js"
                />
            </body>
        </html>
    )
}
