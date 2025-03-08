"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import profile from "@/app/assets/testimonial/image.png";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 2,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 3,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  // Calculate visible testimonials (3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visibleItems = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length
      visibleItems.push(testimonials[index])
    }
    return visibleItems
  }

  return (
    <div className="w-full bg-[#153a62] text-white py-12 px-7 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">What peoples says about us</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#f7941d] hover:bg-opacity-90 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between mb-4">
                <Quote className="w-8 h-8 text-[#153a62]" />
                <div className="flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f7941d] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <svg className="w-5 h-5 text-[#f7941d] fill-current" viewBox="0 0 24 24">
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill="url(#half-star)"
                      />
                      <defs>
                        <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                          <stop offset="50%" stopColor="#f7941d" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 line-clamp-5">{testimonial.content}</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={profile}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#f7941d] text-white" : "bg-white text-black bg-opacity-50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

