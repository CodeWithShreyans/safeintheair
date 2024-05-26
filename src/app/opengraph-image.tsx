/* eslint-disable react/no-unknown-property */

import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Are you safe in the air?"
export const size = {
    height: 630,
    width: 1200,
}

export const contentType = "image/png"

const OG = async () => {
    const geist = fetch(
        "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-600-normal.ttf",
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        <div tw="w-full h-full flex flex-col justify-center p-4 pl-10 bg-black text-[#ECEDEE]">
            <p tw="text-[12rem] leading-none">Are you safe</p>
            <p tw="text-[12rem] leading-none">in the air?</p>
        </div>,
        {
            ...size,
            fonts: [
                {
                    data: await geist,
                    name: "Geist",
                    style: "normal",
                    weight: 400,
                },
            ],
        },
    )
}

export default OG
