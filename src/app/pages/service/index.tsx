import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { CompanyFormationIcon, SecretarialServicesIcon, VirtualOfficeIcon } from "./custom-icons"
import { Button } from "@/components/ui/button"

export default function ServiceSection() {
  const services = [
    {
      icon: (
        <div className="text-amber-500">
          <CompanyFormationIcon className="w-16 h-16" />
        </div>
      ),
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      learnMore: "Learn more",
    },
    {
      icon: (
        <div className="text-amber-500">
          <SecretarialServicesIcon className="w-16 h-16" />
        </div>
      ),
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      learnMore: "Learn more",
    },
    {
      icon: (
        <div className="text-amber-500">
          <VirtualOfficeIcon className="w-16 h-16" />
        </div>
      ),
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      learnMore: "Learn more",
    },
    {
      icon: (
        <div className="text-amber-500">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 16.5L3 12.5L7 8.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 8.5L21 12.5L17 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4.5L10 20.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      learnMore: "Learn more",
    },
    {
      icon: (
        <div className="text-amber-500">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 8V12L15 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7 19L7 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 19L17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 2L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 2L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      learnMore: "Learn More",
    },
    {
      icon: (
        <div className="text-amber-500">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      ),
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      learnMore: "Learn More",
    },
  ]

  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium mb-4">WELCOME TO REGISTERKARO.IN</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#3a2a0d]">Explore our Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 relative border-b md:border-b-0 md:last:border-b-0"
          >
            {/* Vertical divider lines */}
            {index % 3 !== 2 && (
              <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-200"></div>
            )}

            {/* Red accent lines */}
            {(index === 1 || index === 2 || index === 4 || index === 5) && (
              <div className="absolute right-0 top-3/4 h-16 w-1 bg-red-600 hidden lg:block"></div>
            )}

            {/* Service content */}
            <div className="mb-6">{service.icon}</div>
            <h2 className="text-xl font-bold mb-6">{service.title}</h2>
            <p className="mb-8 text-gray-700 max-w-xs">{service.description}</p>
            <Link
              href="#"
              className="flex items-center text-gray-800 font-medium hover:text-amber-500 transition-colors"
            >
              {service.learnMore} <ArrowRight className="ml-1 w-5 h-5 rounded-full" />
            </Link>
          </div>
        ))}
      </div>
      <Button className="bg-[#1a3c61] w-[200px] mt-9 hover:bg-[#132e4a] font-bold text-white px-8 py-6 rounded-md">
        See all services
      </Button>
    </div>
  )
}

