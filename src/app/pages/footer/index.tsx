import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1A4A] text-white py-10 px-6 md:px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <p className="text-gray-300 mb-4">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaGoogle className="cursor-pointer" />
            <FaApple className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">START A BUSINESS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">GOVERNMENT REGISTRATION</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">COMPLIANCE & TAX</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">BIS & CDSCO</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10 flex flex-col items-center text-gray-400">
        <button className="bg-orange-400 px-5 text-white p-3 rounded-full shadow-md mb-4">
          &#8593;
        </button>
        <p>&copy; 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
