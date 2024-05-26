import aircraft from "@/aircraft.json" assert { type: "json" }
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
} from "@nextui-org/react"
import NextImage from "next/image"
import { notFound } from "next/navigation"
import { stringSimilarity } from "string-similarity-js"
import { twMerge } from "tailwind-merge"

const AircraftPage = ({
    searchParams,
}: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const model = decodeURIComponent(searchParams.model as string)
    const similarity: number[] = []
    aircraft.forEach((a, i) => {
        similarity[i] = stringSimilarity(`${a.manufacturer} ${a.model}`, model)
    })
    const max = Math.max(...similarity)
    const aircraftData = aircraft[similarity.indexOf(max)]
    if (max < 0.25) {
        notFound()
    }
    return (
        <Card className="min-w-96">
            <CardHeader className="flex gap-3 justify-between">
                <div className="flex gap-3 items-center">
                    <Image
                        alt="nextui logo"
                        height={100}
                        radius="sm"
                        src={`/icons/${aircraftData?.manufacturer.toLowerCase()}.svg`}
                        fallbackSrc="/icons/triangle.svg"
                        width={100}
                        as={NextImage}
                        className="md:h-16 md:w-16 md:p-2"
                    />

                    <h1 className="text-lg md:text-xl">{model}</h1>
                </div>

                {aircraftData?.safe ? (
                    <div className="text-lg md:text-xl font-semibold text-white bg-green-700 rounded px-2 py-0.5">
                        SAFE
                    </div>
                ) : (
                    <div className="text-lg md:text-xl font-semibold text-white bg-red-700 rounded px-2 py-0.5">
                        UNSAFE
                    </div>
                )}
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="text-lg md:text-lg text-default-500">
                    Odds of Fatal Accident
                </p>

                <p
                    className={twMerge(
                        "md:text-lg",
                        aircraftData?.safe ? "text-green-500" : "text-red-500",
                    )}
                >
                    {aircraftData?.odds}
                </p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal={true}
                    showAnchorIcon={true}
                    href="https://airlinelist.com/"
                >
                    Data from AirlineList
                </Link>
            </CardFooter>
        </Card>
    )
}

export default AircraftPage
