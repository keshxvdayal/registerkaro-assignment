import Image from "next/image"
import Link from "next/link"
import about from "@/app/assets/aboutUs.png"

export default function AboutPage() {
  return (
    <div className="w-full  bg-white">
      <div className="container mx-auto px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-[#FF8A00] font-medium uppercase tracking-wide">WELCOME TO REGISTERKARO.IN</p>

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#333333]">About </span>
              <span className="text-[#FF8A00]">Register Karo</span>
            </h1>

            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                We have been using Intelegencia as our DevOps vendor for our field service applications over the last
                couple of years and I m extremely pleased with their performance, ability to execute, and willingness to
                adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding
                everyone s expectations.
              </p>

              <p className="text-gray-800 leading-relaxed">
                I would strongly recommend their services to any organization that is looking for solid, reliable, and
                predictable outcomes.
              </p>
            </div>

            <div>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#0F3460] text-white font-medium rounded hover:bg-[#0a2647] transition-colors"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={about}
                alt="Register Karo Team"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

