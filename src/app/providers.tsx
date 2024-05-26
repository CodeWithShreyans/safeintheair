"use client"
import { NextUIProvider } from "@nextui-org/react"

const Providers = ({
    children,
    className,
}: { children: React.ReactNode; className?: string }) => {
    return <NextUIProvider className={className}>{children}</NextUIProvider>
}

export { Providers }
