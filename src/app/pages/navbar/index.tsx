"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Facebook, Instagram, Menu, PinIcon as Pinterest, Search, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1a3a68] text-white py-3 px-4 md:px-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a href="mailto:www.registerkaro.in" className="flex items-center hover:text-orange-300">
              <span className="hidden sm:inline">www.registerkaro.in</span>
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:+918447746183" className="flex items-center hover:text-orange-300">
              <span>+918447746183</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-orange-300">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-orange-300">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-orange-300">
              <Twitter size={18} />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="hover:text-orange-300">
              <Pinterest size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-48">
                
                <div className="flex items-center mt-1">
                  <span className="text-[#1a3a68] text-2xl font-bold">Register</span>
                  <span className="text-[#ff8a00] text-2xl font-bold">Karo</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 font-medium hover:text-[#ff8a00]">
                Home
              </Link>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-800 font-medium hover:text-[#ff8a00] focus:outline-none"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform scale-0 group-hover:scale-100 transition-transform origin-top">
                  <Link href="/service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Service 1
                  </Link>
                  <Link href="/service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Service 2
                  </Link>
                  <Link href="/service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Service 3
                  </Link>
                </div>
              </div>
              <Link href="/blog" className="text-gray-800 font-medium hover:text-[#ff8a00]">
                Blog
              </Link>
              <Link href="/contact-us" className="text-gray-800 font-medium hover:text-[#ff8a00]">
                Contact Us
              </Link>
              <Link href="/about-us" className="text-gray-800 font-medium hover:text-[#ff8a00]">
                About us
              </Link>
            </nav>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button aria-label="Search" className="p-2 text-gray-600 hover:text-[#ff8a00]">
                <Search size={20} />
              </button>
              <Button className="bg-[#ff8a00] hover:bg-[#e67e00] text-white font-medium px-6 py-2 rounded-md">
                Talk An Expert
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="flex items-center space-x-4 p-8 lg:hidden">
              <button aria-label="Search" className="p-2 text-gray-600">
                <Search size={20} />
              </button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] p-6 sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center py-4 border-b">
                      <div className="flex items-center">
                        <span className="text-[#1a3a68] text-xl font-bold">Register</span>
                        <span className="text-[#ff8a00] text-xl font-bold">Karo</span>
                      </div>
                    </div>
                    <nav className="flex flex-col py-6 space-y-4">
                      <Link href="/" className="text-gray-800 font-medium hover:text-[#ff8a00] py-2">
                        Home
                      </Link>
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-[#ff8a00] py-2"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          <span>Our Services</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            <Link href="/service1" className="block py-2 text-gray-700 hover:text-[#ff8a00]">
                              Service 1
                            </Link>
                            <Link href="/service2" className="block py-2 text-gray-700 hover:text-[#ff8a00]">
                              Service 2
                            </Link>
                            <Link href="/service3" className="block py-2 text-gray-700 hover:text-[#ff8a00]">
                              Service 3
                            </Link>
                          </div>
                        )}
                      </div>
                      <Link href="/blog" className="text-gray-800 font-medium hover:text-[#ff8a00] py-2">
                        Blog
                      </Link>
                      <Link href="/contact-us" className="text-gray-800 font-medium hover:text-[#ff8a00] py-2">
                        Contact Us
                      </Link>
                      <Link href="/about-us" className="text-gray-800 font-medium hover:text-[#ff8a00] py-2">
                        About us
                      </Link>
                    </nav>
                    <div className="mt-auto">
                      <Button className="w-full bg-[#ff8a00] hover:bg-[#e67e00] text-white font-medium py-2 rounded-md">
                        Talk An Expert
                      </Button>
                      <div className="flex justify-center space-x-6 mt-6">
                        <a
                          href="https://instagram.com"
                          aria-label="Instagram"
                          className="text-gray-600 hover:text-[#ff8a00]"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href="https://facebook.com"
                          aria-label="Facebook"
                          className="text-gray-600 hover:text-[#ff8a00]"
                        >
                          <Facebook size={20} />
                        </a>
                        <a
                          href="https://twitter.com"
                          aria-label="Twitter"
                          className="text-gray-600 hover:text-[#ff8a00]"
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href="https://pinterest.com"
                          aria-label="Pinterest"
                          className="text-gray-600 hover:text-[#ff8a00]"
                        >
                          <Pinterest size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

