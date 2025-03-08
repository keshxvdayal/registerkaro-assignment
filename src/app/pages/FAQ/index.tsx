"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];

export default function FAQSection() {
  const [visibleFaqs] = useState(5);

  return (
    <div className="px-6 sm:px-10 lg:px-20 mx-auto py-16 text-center">
  <p className="text-sm text-orange-500 font-semibold">FAQ</p>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4 font-bold text-gray-900">
    Frequent Ask Questions
  </h2>

  <div className="mt-6 space-y-4">
    {faqs.slice(0, visibleFaqs).map((faq, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg border border-gray-200 relative"
      >
        <span className="text-gray-700 font-semibold text-center sm:text-left">{faq}</span>
        <ChevronRight className="text-gray-500 md:block hidden mt-2 sm:mt-0" />
      </div>
    ))}
  </div>

  <div className="mt-6">
    <Button className="bg-[#1a3c61] hover:bg-[#132e4a] font-bold text-white md:py-7 px-6 py-6 rounded-md w-1/2 sm:w-auto">
      Show more <ChevronRight className="ml-2" />
    </Button>
  </div>
</div>

  );
}
