import { env } from "@/env"
import { Button, Input } from "@nextui-org/react"
import { notFound, redirect } from "next/navigation"

const getFlightData = async (formData: FormData) => {
    "use server"
    const flightNumber = formData.get("flightNumber") as string
    const response = await fetch(
        `https://aerodatabox.p.rapidapi.com/flights/number/${flightNumber.replaceAll(
            " ",
            "",
        )}?withAircraftImage=false&withLocation=false`,
        {
            headers: {
                "X-RapidAPI-Key": env.RAPIDAPI_KEY,
                "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
            },
        },
    )
    if (response.status !== 200) {
        notFound()
    }
    console.log(response)
    const data = (await response.json()) as { aircraft: { model: string } }[]
    console.log(data)
    redirect(`/aircraft?model=${data[0]?.aircraft.model}`)
}

export default function HomePage() {
    return (
        <>
            <form
                action={getFlightData}
                className="container flex flex-row items-center justify-center gap-4 px-4 py-16"
            >
                <Input
                    label="Flight Number"
                    placeholder="eg. UA2145 or DL2614"
                    name="flightNumber"
                />
                <Button type="submit">Check</Button>
            </form>
        </>
    )
}
