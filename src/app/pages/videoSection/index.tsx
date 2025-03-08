import { FaLightbulb, FaBullhorn } from "react-icons/fa";
import image from "@/app/assets/image copy.png"
import Image from "next/image";

const VideoIntroSection = () => {
  return (
    <section className="bg-[#1E3A5F] py-16 px-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side: Text Content */}
      <div className="text-white md:w-1/2">
        <h2 className="text-3xl font-bold">Our Video Introductions</h2>
        <p className="text-gray-300 mt-4">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna <br />
          vulputate pellentesque a diam tincidunt.
        </p>
        
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#FFA229] p-3 rounded-full">
              <FaLightbulb className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Explore ideas together</h3>
              <p className="text-gray-300 text-sm">
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#FFA229] p-3 rounded-full">
              <FaBullhorn className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bring those ideas to life</h3>
              <p className="text-gray-300 text-sm">
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: Video Thumbnail */}
      <div className="relative md:w-1/2">
        <Image
          src={image}
          alt="Video introduction"
          className="rounded-lg shadow-lg w-full"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 text-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M7 6v12l10-6z" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default VideoIntroSection;


