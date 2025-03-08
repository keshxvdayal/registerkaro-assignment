import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"
import blog1 from "@/app/assets/blog/blog1.png";
import blog2 from "@/app/assets/blog/blog2.png";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-7 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium mb-4">EXPLORE OUR BLOGS</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#3a2a0d]">Accelerate Digital Transformation</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="flex flex-col">
          <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
            <Image
              src={blog2}
              alt="Person using stylus on tablet"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-gray-600 mb-2">
            <span>Prabhash Mishra • 1 Jan 2023 • Today</span>
          </div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-900">Small business & Startup</h2>
            <ArrowUpRight className="h-6 w-6 text-gray-900" />
          </div>
          <p className="text-gray-700 mb-6">
            Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
          </p>
          <div className="mt-auto flex gap-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Tax & Audit</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Management</span>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col">
          <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
            <Image
              src={blog1}
              alt="Team meeting with sticky notes"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-gray-600 mb-2">
            <span>Mahesh Kumar • 1 Jan 2023</span>
          </div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-900">Scale-Up Company Offer</h2>
            <ArrowUpRight className="h-6 w-6 text-gray-900" />
          </div>
          <p className="text-gray-700 mb-6">
            Mental models are simple expressions of complex processes or relationships.
          </p>
          <div className="mt-auto flex gap-3">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Tax</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Research</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Compliance</span>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col">
          <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
            <Image
              src={blog2}
              alt="Person using stylus on tablet"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-gray-600 mb-2">
            <span>Rakhi Verma • 1 Jan 2023</span>
          </div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-900">Growing Business Package</h2>
            <ArrowUpRight className="h-6 w-6 text-gray-900" />
          </div>
          <p className="text-gray-700 mb-6">
            Introduction to Wireframing and its Principles. Learn from the best in the industry.
          </p>
          <div className="mt-auto flex gap-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Audit</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Money Back</span>
          </div>
        </div>
      </div>
    </div>
  )
}

