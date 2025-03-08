import Image from "next/image";
import AppStore from "@/app/assets/download/appStore.png";
import GooglePlay from "@/app/assets/download/googlePlay.png";
import "./style.css"

export default function DownloadAppSection() {
  return (
    <section
    className="text-white download bg-[#1C4670]  h-full md:h-[70vh]  md:py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between"
  >
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Manage Your Services by your <br className="hidden md:block" /> Mobile Phone
      </h2>
      <p className="text-lg text-gray-300">
        Download our app to manage and track your services. Our app <br className="hidden md:block" />
        enables you to stay in touch with our experts and helps you track your progress.
      </p>
      <div className="flex flex-col items-center md:items-start space-y-4">
        <p className="text-lg">Get the App</p>
        <div className="flex space-x-4">
          <Image src={AppStore} alt="Get it on App Store" width={150} height={50} className="cursor-pointer rounded-lg" />
          <Image src={GooglePlay} alt="Get it on Google Play" width={150} height={50} className="cursor-pointer rounded-lg" />
        </div>
      </div>
    </div>
  </section>
  
  );
}
