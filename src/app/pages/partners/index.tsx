import Image from "next/image"
import samsung from "@/app/assets/partners/samsung.png"
import monday from "@/app/assets/partners/monday.png"
import morpheus from "@/app/assets/partners/morpheus.png"
import segment from "@/app/assets/partners/segment.png"
import oracle from "@/app/assets/partners/oracle.png"
export default function Partners() {
  return (
    <section className="py-12 px-4 w-full">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">
      Trusted By Over 100+ Startups and Freelance Businesses
    </h2>

    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
      <Image
        src={oracle}
        alt="Oracle"
        width={120}
        height={20}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
      <Image
        src={morpheus}
        alt="Morpheus"
        width={120}
        height={20}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
      <Image
        src={morpheus}
        alt="Morpheus"
        width={120}
        height={20}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
      <Image
        src={samsung}
        alt="Samsung"
        width={120}
        height={20}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
      <Image
        src={monday}
        alt="Monday.com"
        width={120}
        height={20}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
      <Image
        src={segment}
        alt="Segment"
        width={120}
        height={40}
        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
      />
    </div>
  </div>
</section>

  )
}

