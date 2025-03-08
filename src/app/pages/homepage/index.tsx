import { Star, } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { url } from "inspector"
// import bg from "@/app/assets/bg.png"
import people from "@/app/assets/people.png"
import handshake from "@/app/assets/handshake.png"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import "./style.css"

export default function HomePage() {
    return (
        <div
        className="pt-9 md:pt-1 homepage"
        >
            <div className="px-6  md:px-16">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex pb-6 gap-2">
                            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                            <span className="font-medium">Google Rating</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="w-full">
                            <h1 className="text-2xl sm:text-3xl lg:text-[47px] text-gray-900 leading-tight font-medium">
                                Your trusted partner
                                <br />
                                for compliance business needs
                            </h1>
                            <div className="w-16 h-1 bg-red-500 my-4 md:my-6"></div>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg pb-5 text-gray-700">
                            An online business compliance platform that helps entrepreneurs and other individuals with various,{" "}
                            <span className="font-bold">registrations, tax filings,</span> and other{" "}
                            <span className="font-bold">legal matters.</span>
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="grid grid-cols-2 gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-5 h-5 border-2 rounded-[3px] border-black"></div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-xl md:text-2xl font-bold text-amber-500">4.5+</span>
                                    <span className="text-sm text-gray-600">Customer Rating</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Image src={people} alt="people" width={40} height={40} />
                                <div className="flex flex-col items-start">
                                    <span className="text-xl md:text-2xl font-bold text-amber-500">20,000+</span>
                                    <span className="text-sm text-gray-600">Clients</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Image src={handshake} alt="handshake" width={40} height={40} />
                                <div className="flex flex-col items-start">
                                    <span className="text-xl md:text-2xl font-bold text-amber-500">99.8%</span>
                                    <span className="text-sm text-gray-600">Financial Stability</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex  gap-4">
                            <Button className="bg-[#1a3c61] hover:bg-[#132e4a] font-bold text-white px-6 py-6 md:px-8 md:py-6 rounded-md">
                                Talk An Expert
                            </Button>
                            <Button className="bg-transparent hover:bg-transparent text-gray-800 text-base md:text-lg font-bold border-none px-6 py-6 md:px-8 md:py-6 rounded-md flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5"></div>
                                </div>
                                See how it works
                            </Button>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative h-[0px]  md:h-[600px]"></div>
                </div>

                {/* Floating Cards (Hidden on Mobile) */}
                <div className="absolute right-0 top-52 space-y-4 hidden md:block">
                    {["Annual Compliance", "Payroll Services", "Company Formation", "Annual Compliance"].map((title, index) => (
                        <Card key={index} className="p-4 shadow-lg bg-white hover:shadow-xl transition-shadow">
                            <h3 className="font-medium">{title}</h3>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}

