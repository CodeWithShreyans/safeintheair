export const siteConfig = {
    baseKeywords: ["Shreyans Jain", "DestroyerXyz", "Safe in the Air"],
    description: "Are you safe in the air?" as const,
    links: {
        github: "https://github.com/CodeWithShreyans/safeintheair",
        linkedin: "https://www.linkedin.com/in/sjain07/",
        twitter: "https://twitter.com/CodeWShreyans",
    } as const,
    siteName: "Safe in the Air?" as const,
    creatorName: "Shreyans Jain" as const,
    // TODO: Add a proper image
    // ogImage: "/opengraph-image" as const,
    url:
        process.env.NODE_ENV === "production"
            ? "https://safeintheair.shreyans.sh"
            : process.env.VERCEL_URL
              ? process.env.VERCEL_URL
              : "http://localhost:3000",
}

export type SiteConfig = typeof siteConfig
