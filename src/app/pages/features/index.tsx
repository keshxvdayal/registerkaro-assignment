import Image from "next/image";
import red from "@/app/assets/features/red.png"
import green from "@/app/assets/features/green.png"
import yellow from "@/app/assets/features/yellow.png"
import gray from "@/app/assets/features/mail.png"

const steps = [
  { id: 1, text: "Fill up Application Form", icon: red, bgColor: "bg-[#EB5757]" },
  { id: 2, text: "Make Online Payment", icon:green, bgColor: "bg-[#27AE60]" },
  { id: 3, text: "Executive will Process Application", icon: yellow, bgColor: "bg-[#F2994A]" },
  { id: 4, text: "Get Confirm Mail", icon: gray, bgColor: "bg-[#828282]" },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#FFA229] py-6 md:py-12 ">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between gap-6 px-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.bgColor}`}>
              <Image src={step.icon} alt={step.text} width={24} height={24} />
            </div>
            <p className="text-black font-semibold">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
